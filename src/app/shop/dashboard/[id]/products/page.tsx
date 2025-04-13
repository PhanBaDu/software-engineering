import { columns, Payment } from '@/app/shop/dashboard/[id]/products/columns';
import { DataTable } from '@/app/shop/dashboard/[id]/products/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CircleHelp, Plus } from 'lucide-react';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      total: 3,
      status: '110.000.000đ',
      shipping: '10',
      check: 'Đã được duyệt',
      actions: 'Xem chi tiết',
    },
    {
      id: '2',
      total: 7,
      status: '110.000.000đ',
      shipping: '10',
      check: 'Vi phạm',
      actions: 'Xem chi tiết',
    },
    {
      id: '3',
      total: 2,
      status: '110.000.000đ',
      shipping: '10',
      check: 'Đã được duyệt',
      actions: 'Xem chi tiết',
    },
    {
      id: '4',
      total: 1,
      status: '110.000.000đ',
      shipping: '10',
      check: 'Đã được duyệt',
      actions: 'Xem chi tiết',
    },
    {
      id: '5',
      total: 6,
      status: '110.000.000đ',
      shipping: '10',
      check: 'Đã được duyệt',
      actions: 'Xem chi tiết',
    },
  ];
}

export default async function ProductsSeller() {
  const data = await getData();
  return (
    <Card className="rounded shadow-none">
      <CardHeader className="m-0">
        <div className="flex justify-between items-center">
          <CardTitle className="font-medium text-lg uppercase">Sản phẩm</CardTitle>
          <div className="flex gap-4">
            <Button className="text-xs">
              <Plus /> Thêm sản phẩm mới
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <div className="flex gap-10 items-center">
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary rounded-none"
            >
              Tất cả (5)
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Đang hoạt động (4)
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Vi phạm (1)
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Chờ duyệt bởi TechMall (0)
            </Button>
          </div>
          <Separator />
        </div>
        <div className="rounded border border-primary w-full p-4 flex flex-col gap-4">
          <Input
            placeholder="Tìm kiếm sản phẩm theo mã sản phẩm / tên sản phẩm / giá sản phẩm..."
            className="text-xs placeholder:text-xs"
          />
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-sm">5 Sản phẩm</h1>
            <span className="bg-muted p-1 rounded flex items-center gap-1">
              Hạn mực đăng sản phẩm: 1000 sản phẩm <CircleHelp size={12} />
            </span>
          </div>
          <DataTable columns={columns} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
