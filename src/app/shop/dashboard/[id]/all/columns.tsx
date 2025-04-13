'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  total: number;
  shipping: string;
  status: string;
  actions: string;
};

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'Mã sản phẩm',
  },
  {
    accessorKey: 'total',
    header: 'Số lượng đơn hàng',
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái / Đếm ngược',
    cell: ({ row }) => {
      const status = row.original.status;

      let color = 'bg-gray-200 text-gray-800'; // default
      if (status === 'Chờ xác nhận') color = 'bg-yellow-100 text-yellow-800';
      else if (status === 'Chờ lấy hàng') color = 'bg-orange-100 text-orange-800';
      else if (status === 'Đang giao') color = 'bg-blue-100 text-blue-800';
      else if (status === 'Đã giao') color = 'bg-green-100 text-green-800';
      else if (status === 'Đã huỷ') color = 'bg-red-100 text-red-800';

      return <span className={`text-[10px] px-[4px] rounded ${color}`}>{status}</span>;
    },
  },
  {
    accessorKey: 'shipping',
    header: 'Đơn vị vận chuyển',
  },
  // ...
  {
    header: 'Thao tác',
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="bg-primary-foreground text-[10px] rounded px-[4px] cursor-pointer hover:bg-secondary-3/80 duration-200">
              Xem chi tiết
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // ...
];
