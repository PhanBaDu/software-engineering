import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';
import Image from 'next/image';

import {
  Bell,
  ChevronDown,
  Earth,
  LogIn,
  MousePointerClick,
  Search,
  ShoppingBag,
  UserPlus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCurrentUser } from '@/lib/user';
import UserActions from '@/features/components/user-actions';

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <nav className="w-full flex flex-col gap-1 pb-3 pt-[2px]">
      {/* Navigation Top */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href={'/seller'} className="flex items-center gap-1">
            <Button className="text-background text-xs p-0" variant={'link'}>
              Trang người bán
            </Button>
            <MousePointerClick className="text-background" size={14} />
          </Link>
          <span className="h-3 w-[1px] bg-primary-foreground/40 rounded"></span>
          <Link href={'/seller'} className="flex items-center gap-1">
            <Button className="text-background text-xs p-0" variant={'link'}>
              Thông báo
            </Button>
            <Bell className="text-background" size={13} />
          </Link>
          <span className="h-3 w-[1px] bg-primary-foreground/40 rounded"></span>
          <Link href={'/seller'} className="flex items-center gap-1">
            <Button className="text-background text-xs p-0" variant={'link'}>
              Tiếng việt
            </Button>
            <ChevronDown className="text-background" size={14} />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <UserActions user={user} />
          ) : (
            <>
              <RegisterLink className="flex items-center gap-1">
                <Button className="text-background text-xs p-0" variant={'link'}>
                  Đăng ký
                </Button>
                <UserPlus className="text-background" size={14} />
              </RegisterLink>
              <span className="h-3 w-[1px] bg-primary-foreground/40 rounded"></span>
              <LoginLink className="flex items-center gap-1">
                <Button className="text-background text-xs p-0" variant={'link'}>
                  Đăng nhập
                </Button>
                <LogIn className="text-background" size={14} />
              </LoginLink>
            </>
          )}
        </div>
      </div>
      {/* Logo | Search | Cart */}
      <div className="flex justify-between items-center gap-2">
        <div className="w-1/12">
          <Link href={'/'}>
            <Image
              src={'/secondary.svg'}
              alt="Logo Tech Mall"
              width={50}
              height={50}
              style={{ height: 50, width: 50 }}
              priority
            />
          </Link>
        </div>
        <div className="w-9/12 flex items-center gap-1 justify-center bg-background relative border rounded p-[2px]">
          <Input
            className="bg-transparent shadow-none placeholder:text-xs text-secondary-foreground rounded border-none outline-none"
            placeholder="Tìm kiếm..."
          />
          <Button className="w-16 bg-primary duration-200 rounded">
            <Search className="text-background" strokeWidth={2} />
          </Button>
        </div>
        <div className="w-1/12 flex justify-end relative">
          <Link href={'/cart'}>
            <ShoppingBag className="text-background" size={27} strokeWidth={1.5} />
          </Link>
          {user && (
            <span className="absolute -top-2 -right-2 bg-background p-[2px] rounded-full text-primary text-[10px] border border-dashed border-primary">
              22
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
