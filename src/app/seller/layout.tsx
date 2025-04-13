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
  if (shop && shop.status === 'APPROVED') return redirect(`/shop/dashboard/${shop?.id}/all`);
  if (shop && shop.status === 'PENDING') return redirect(`/shop/pending`);
  if (shop && shop.status === 'REJECTED') return redirect(`/shop/rejected`);

  return (
    <div className="pt-28 container_w">
      <Header page="seller" />
      {children}
    </div>
  );
}
