'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api } from '@/api/root';
import { setCookie } from 'cookies-next';
import {
  AUTH_SESSION_COOKIE_NAME,
  AUTH_TOKEN_COOKIE_NAME
} from '@/constants/auth';
import { toast } from 'sonner';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const loginMutation = api.auth.login.useMutation({
    retry: false,
    onSuccess: async (data) => {
      const {
        access_token,
        access_token_expires_at,
        refresh_token,
        refresh_token_expires_at
      } = data;
      await setCookie(AUTH_TOKEN_COOKIE_NAME, access_token, {
        // expires: new Date(access_token_expires_at),
        maxAge: access_token_expires_at - Math.floor(Date.now() / 1000) - 120, // subtract 120 seconds for safety
        path: '/',
        sameSite: 'lax',
        secure: true
      });
      await setCookie(AUTH_SESSION_COOKIE_NAME, refresh_token, {
        // expires: new Date(refresh_token_expires_at),
        maxAge: refresh_token_expires_at - Math.floor(Date.now() / 1000) - 120, // subtract 120 seconds for safety
        path: '/',
        sameSite: 'lax',
        secure: true
      });
      window.location.href = '/app';
    },
    onError: () => {
      toast.error('Email atau password salah. Silakan coba lagi.');
    }
  });

  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-bold'>Login to your account</h1>
        <p className='text-muted-foreground text-sm text-balance'>
          Enter your email below to login to your account
        </p>
      </div>
      <div className='grid gap-6'>
        <div className='grid gap-3'>
          <Label htmlFor='email'>Email</Label>
          <Input
            name='email'
            id='email'
            type='email'
            placeholder='m@example.com'
            required
          />
        </div>
        <div className='grid gap-3'>
          <div className='flex items-center'>
            <Label htmlFor='password'>Password</Label>
            {/* <a */}
            {/*   href='#' */}
            {/*   className='ml-auto text-sm underline-offset-4 hover:underline' */}
            {/* > */}
            {/*   Forgot your password? */}
            {/* </a> */}
          </div>
          <Input name='password' id='password' type='password' required />
        </div>
        <Button
          type='submit'
          className='w-full'
          onClick={async (e) => {
            e.preventDefault();
            const form = e.currentTarget.closest('form');
            if (form) {
              const formData = new FormData(form);
              const email = formData.get('email') as string;
              const password = formData.get('password') as string;
              await loginMutation.mutateAsync({ email, password });
            }
          }}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
