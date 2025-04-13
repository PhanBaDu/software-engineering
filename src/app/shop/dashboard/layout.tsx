import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { getCurrentShop } from '@/lib/shop';
import { getCurrentUser } from '@/lib/user';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const shop = await getCurrentShop();
  const user = await getCurrentUser();

  if (!user) return redirect('/api/auth/login');
  if (!shop) return redirect('/');
  if (shop.status === 'PENDING') return redirect('/shop/pending');
  if (shop.status === 'REJECTED') return redirect('/shop/rejected');

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-muted">
        <div className="sticky bg-primary top-0 right-0 left-0 w-full flex justify-between items-center pr-4 ">
          <SidebarTrigger className="w-10 h-10" />
          <h1 className="text-background uppercase font-bold">TECHMALL</h1>
        </div>
        <div className="p-2">{children}</div>
      </main>
    </SidebarProvider>
  );
}
