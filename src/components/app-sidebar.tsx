import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ArrowLeft, CircleHelp, EllipsisVertical, LogOut, Search, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GroupSidebar } from '@/features/shop/components/group-sidebar';
import { getCurrentShop } from '@/lib/shop';
import { redirect } from 'next/navigation';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export async function AppSidebar() {
  const shop = await getCurrentShop();
  if (!shop) return redirect('/');

  return (
    <Sidebar>
      <SidebarContent className="bg-background border-r-[0px]">
        <SidebarGroup>
          <SidebarGroupContent>
            <GroupSidebar id={shop.id} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Action Logout */}
      <SidebarFooter className="border-r-[0px] bg-background">
        <SidebarMenu>
          <SidebarMenuItem className="ml-1">
            <SidebarMenuButton className="text-muted-foreground text-xs">
              <Settings />
              <span>Cài đặt</span>
            </SidebarMenuButton>
            <SidebarMenuButton className="text-muted-foreground text-xs">
              <Search />
              <span>Tìm kiếm</span>
            </SidebarMenuButton>
            <SidebarMenuButton className="text-muted-foreground text-xs">
              <CircleHelp />
              <span>Cần giúp đỡ</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="w-full flex justify-between rounded py-6 items-center shadow-none px-2"
                    variant={'ghost'}
                  >
                    <div className="w-full flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <Avatar className="w-8 h-8 rounded">
                          <AvatarImage src={'user?.avatarUrl'} />
                          <AvatarFallback className="rounded bg-primary text-background font-semibold">
                            {shop?.shopName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start">
                          <span className="select-none text-xs font-semibold">
                            {shop?.shopName}
                          </span>
                          <span className="select-none text-xs text-muted-foreground">
                            {shop?.email}
                          </span>
                        </div>
                      </div>
                      <EllipsisVertical className="text-muted-foreground" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="rounded p-0 mb-2 shadow-none w-44">
                  <DropdownMenuItem className="p-0">
                    <Button
                      className="text-xs w-full flex justify-between items-center"
                      variant={'ghost'}
                      asChild
                    >
                      <Link href={'/'}>
                        <span>Trở về trang chính</span>
                        <ArrowLeft />
                      </Link>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0">
                    <LogoutLink className="w-full">
                      <Button
                        className="text-xs w-full flex justify-between items-center"
                        variant={'ghost'}
                      >
                        <span>Đăng Xuất</span>
                        <LogOut />
                      </Button>
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
