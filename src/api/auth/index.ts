import { createMutationApi, createQueryApi } from '@/lib/api-client';
import { AuthApi, Configuration } from '@/api/__spec';
import { getUser } from '@/lib/auth';
import { env } from 'process';

const api = new AuthApi(
  new Configuration({
    basePath: env.NEXT_PUBLIC_BACKEND_URL
  })
);

export const __auth = {
  login: createMutationApi({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await api.postAuthLogin({
        email: data.email,
        password: data.password
      });
      return response.data.data;
    }
  }),

  getUser: createQueryApi({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await getUser();
      if (!user) {
        return null;
      }
      return user;
    }
  }),

  getUserProtected: createQueryApi({
    queryKey: ['user-protected'],
    queryFn: async () => {
      const user = await getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }
      return user;
    }
  })
};
