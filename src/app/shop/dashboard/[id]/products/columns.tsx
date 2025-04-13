'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  total: number;
  shipping: string;
  status: string;
  check: string;
  actions: string;
};

import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="shadow-none"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="shadow-none"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Thông tin sản phẩm',
    cell: ({ row }) => (
      <div>
        {row.original.id === '1' ? (
          <div>
            <div className="flex gap-2">
              <Image
                src={'/image.png'}
                alt="image"
                width={50}
                height={50}
                className="border rounded"
              />
              <div>
                {row.original.check === 'Vi phạm' && (
                  <span className="p-[2px] text-[10px] text-background bg-chart-5 rounded">
                    {row.original.check}
                  </span>
                )}
                {row.original.check !== 'Vi phạm' && (
                  <span className="p-[2px] text-[10px] text-background bg-chart-2 rounded">
                    {row.original.check}
                  </span>
                )}
                <p className="font-semibold mt-1">Card đồ họa ROG RTX5090</p>
                <span className="mt-1">ID sản phẩm: {row.original.id}</span>
              </div>
            </div>
            <div className="p-2 pl-4 bg-muted rounded mt-2 flex flex-col gap-2">
              <div className="flex gap-2">
                <Image
                  src={'/image.png'}
                  alt="image"
                  width={50}
                  height={50}
                  className="border rounded"
                />
                <div>
                  {row.original.check === 'Vi phạm' && (
                    <span className="p-[2px] text-[10px] text-background bg-chart-5 rounded">
                      {row.original.check}
                    </span>
                  )}
                  {row.original.check !== 'Vi phạm' && (
                    <span className="p-[2px] text-[10px] text-background bg-chart-2 rounded">
                      {row.original.check}
                    </span>
                  )}
                  <p className="font-semibold mt-1">Card đồ họa ROG RTX5090 màu trắng</p>
                  <span className="mt-1">ID sản phẩm: {row.original.id}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  src={'/image.png'}
                  alt="image"
                  width={50}
                  height={50}
                  className="border rounded"
                />
                <div>
                  {row.original.check === 'Vi phạm' && (
                    <span className="p-[2px] text-[10px] text-background bg-chart-5 rounded">
                      {row.original.check}
                    </span>
                  )}
                  {row.original.check !== 'Vi phạm' && (
                    <span className="p-[2px] text-[10px] text-background bg-chart-2 rounded">
                      {row.original.check}
                    </span>
                  )}
                  <p className="font-semibold mt-1">Card đồ họa ROG RTX5090 màu xanh</p>
                  <span className="mt-1">ID sản phẩm: {row.original.id}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image
              src={'/image.png'}
              alt="image"
              width={50}
              height={50}
              className="border rounded"
            />
            <div>
              {row.original.check === 'Vi phạm' && (
                <span className="p-[2px] text-[10px] text-background bg-chart-5 rounded">
                  {row.original.check}
                </span>
              )}
              {row.original.check !== 'Vi phạm' && (
                <span className="p-[2px] text-[10px] text-background bg-chart-2 rounded">
                  {row.original.check}
                </span>
              )}
              <p className="font-semibold mt-1">Card đồ họa ROG RTX5090</p>
              <span className="mt-1">ID sản phẩm: {row.original.id}</span>
            </div>
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'total',
    header: 'Doanh số',
    cell: ({ row }) => {
      const status = row.original.total;

      return (
        <div>
          {row.original.id === '1' ? (
            <div className="flex flex-col justify-between">
              <span className={`text-xs px-[4px] rounded`}>{status}</span>
              <span className={`text-xs px-[4px] rounded `}>1</span>
              <span className={`text-xs px-[4px] rounded `}>0</span>
            </div>
          ) : (
            <span className={`text-xs px-[4px] rounded `}>{status}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Giá',
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div>
          {row.original.id === '1' ? (
            <div className="flex flex-col justify-between">
              <span className={`text-xs px-[4px] rounded`}>{status}</span>
              <span className={`text-xs px-[4px] rounded `}>115.000.000đ</span>
              <span className={`text-xs px-[4px] rounded `}>130.000.000đ</span>
            </div>
          ) : (
            <span className={`text-xs px-[4px] rounded `}>{status}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'shipping',
    header: 'Kho hàng',
    cell: ({ row }) => {
      const status = row.original.shipping;

      return (
        <div>
          {row.original.id === '1' ? (
            <div className="flex flex-col justify-between">
              <span className={`text-xs px-[4px] rounded`}>{status}</span>
              <span className={`text-xs px-[4px] rounded `}>6</span>
              <span className={`text-xs px-[4px] rounded `}>3</span>
            </div>
          ) : (
            <span className={`text-xs px-[4px] rounded `}>{status}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'check',
    header: 'Trạng thái duyệt',
  },
  // ...
  {
    header: 'Thao tác',
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex flex-col gap-1 cursor-pointer">
          <span className="text-chart-3">Cập nhật</span>
          {payment.check !== 'Vi phạm' ? (
            <span className="text-chart-3">Quảng cáo</span>
          ) : (
            <span className="text-muted-foreground">Quảng cáo</span>
          )}
          <span className="text-chart-3">Xem thêm</span>
          <span className="text-chart-3">Xóa</span>
        </div>
      );
    },
  },
  // ...
];
