import { getCurrentUser } from '@/lib/user';
import { redirect } from 'next/navigation';

import Header from '@/features/components/header';
import { getCurrentShop } from '@/lib/shop';

export default async function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  const shop = await getCurrentShop();
  if (!user) return redirect('/api/auth/login');
  if (shop) return redirect(`/shop/dashboard/${shop?.id}`);
  return (
    <div className="pt-28">
      <Header page="seller" />
      {children}
    </div>
  );
}
