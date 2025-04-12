import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Gender } from '@prisma/client';
import { LogOut, MousePointerClick, ShoppingBag, UserRoundPen } from 'lucide-react';
import Link from 'next/link';

interface Props {
  user: {
    id: number;
    email: string;
    fullName: string;
    avatarUrl: string | null;
    phoneNumber: string | null;
    gender: Gender | null;
    createdAt: Date;
  };
}

export default function UserActions({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <div className="flex items-center justify-between gap-2 p-[2px] pl-1 bg-background rounded">
          <MousePointerClick
            className="rotate-[90deg] text-primary"
            strokeWidth={3}
            size={15}
            width={14}
          />
          <span className="text-primary font-bold text-[10px]">{user.fullName}</span>
          <Avatar className="rounded">
            <AvatarImage className="rounded" src={user.avatarUrl || ''} />
            <AvatarFallback className="">{user.fullName[0]}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="end">
        <DropdownMenuItem asChild>
          <Link
            href="/account"
            className="cursor-pointer text-xs flex justify-between items-center w-full"
          >
            <span>Tài khoản của tôi</span>
            <UserRoundPen className="text-primary" />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/orders"
            className="cursor-pointer text-xs flex justify-between items-center w-full"
          >
            <span>Đơn mua</span>
            <ShoppingBag className="text-primary" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LogoutLink className="cursor-pointer text-xs flex items-center justify-between">
            <span>Đăng xuất</span>
            <LogOut className="text-primary" />
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
