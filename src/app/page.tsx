import { authServer } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await authServer();

  if (!session) {
    return redirect('/signin');
  } else {
    redirect('/app/overview');
  }
}
