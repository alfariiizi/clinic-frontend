import {
  AUTH_SESSION_COOKIE_NAME,
  AUTH_TOKEN_COOKIE_NAME
} from '@/constants/auth';
// import { cookies } from 'next/headers';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import { env } from 'process';

type JwtPayload = {
  sub: string; // user ID
  sid: string; // user session ID
  iat: number; // issued at time in seconds since epoch
  name: string;
  email: string;
  // avatar?: string; // optional user avatar URL
  exp: number; // expiration time in seconds since epoch
  role: string;
  // roles?: string[]; // optional roles array
};

export async function authServer() {
  const refreshToken = await getCookie(AUTH_SESSION_COOKIE_NAME);
  // const refreshToken = cookieStore.get('app_session')?.value;

  if (!refreshToken) {
    // cookieStore.delete(AUTH_TOKEN_COOKIE_NAME);
    // cookieStore.delete(AUTH_SESSION_COOKIE_NAME);
    return null;
  }

  const accessToken = await getValidAccessToken();
  if (!accessToken) {
    // cookieStore.delete(AUTH_TOKEN_COOKIE_NAME);
    // cookieStore.delete(AUTH_SESSION_COOKIE_NAME);
    return null;
  }

  return accessToken;
}

export const getUser = async (): Promise<JwtPayload | null> => {
  const accessToken = await getValidAccessToken();
  if (!accessToken) return null;

  const payload = parseJwt(accessToken);
  if (payload && payload.sub && payload.sid) {
    return payload;
  }

  return null;
};

export const getValidAccessToken = async (): Promise<string | null> => {
  let accessToken = await getCookie(AUTH_TOKEN_COOKIE_NAME);
  // console.debug('Access token from cookie:', accessToken);
  // console.debug(
  //   'Access token client:',
  //   getCookieClient(AUTH_TOKEN_COOKIE_NAME)
  // );

  if (!!accessToken) {
    const payload = parseJwt(accessToken);
    const now = Math.floor(Date.now() / 1000);

    if (payload && payload.exp && payload.exp > now) {
      return accessToken.toString(); // still valid
    }
  }

  // Try refreshing
  try {
    console.info('Access token expired, attempting to refresh...');
    accessToken = await refreshToken();
    return accessToken;
  } catch {
    await deleteCookie(AUTH_TOKEN_COOKIE_NAME);
    await deleteCookie(AUTH_SESSION_COOKIE_NAME);
    return null;
  }
};

const parseJwt = (token: string): JwtPayload => {
  try {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch {
    return {
      sub: '',
      sid: '',
      role: '',
      iat: 0,
      exp: 0,
      name: '',
      email: ''
    };
  }
};

const refreshToken = async () => {
  const refreshToken = await getCookie(AUTH_SESSION_COOKIE_NAME);
  if (!refreshToken) throw new Error('No refresh token');
  const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      refresh_token: refreshToken
    })
  });

  if (!res.ok) throw new Error('Refresh failed');

  const data = await res.json().then(
    (d) =>
      d.data as {
        access_token: string;
        access_token_expiry: number;
      }
  );
  const { access_token: newAccessToken, access_token_expiry } = data;

  await setCookie(AUTH_TOKEN_COOKIE_NAME, newAccessToken, {
    maxAge: access_token_expiry - Math.floor(Date.now() / 1000),
    path: '/',
    sameSite: 'lax',
    secure: true
  });

  return newAccessToken;
};
