import { redirect } from 'next/navigation';

export default async function Dashboard() {
  // const { userId } = await auth();
  //
  // if (!userId) {
  //   return redirect('/auth/sign-in');
  // } else {
  redirect('/app/overview');
  // }
}
