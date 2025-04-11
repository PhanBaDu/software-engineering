import { getCurrentUser } from '@/lib/user';
import { redirect } from 'next/navigation';

import Header from '@/features/components/header';

export default async function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  if (!user) return redirect('/api/auth/login');
  return (
    <div className="pt-28">
      <Header page="seller" />
      {children}
    </div>
  );
}
