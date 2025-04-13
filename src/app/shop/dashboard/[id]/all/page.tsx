import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';
import React from 'react';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      total: 3,
      status: 'Chờ xác nhận',
      shipping: 'Giao hàng nhanh',
      actions: 'Xem chi tiết',
    },
    { id: '2', total: 7, status: 'Đang giao', shipping: 'J&T Express', actions: 'Xem chi tiết' },
    { id: '3', total: 2, status: 'Đã giao', shipping: 'VNPost', actions: 'Xem chi tiết' },
    {
      id: '4',
      total: 1,
      status: 'Đã huỷ',
      shipping: 'Giao hàng tiết kiệm',
      actions: 'Xem chi tiết',
    },
    { id: '5', total: 6, status: 'Chờ lấy hàng', shipping: 'J&T Express', actions: 'Xem chi tiết' },
    {
      id: '6',
      total: 4,
      status: 'Đang giao',
      shipping: 'Giao hàng nhanh',
      actions: 'Xem chi tiết',
    },
    { id: '7', total: 10, status: 'Đang giao', shipping: 'VNPost', actions: 'Xem chi tiết' },
    {
      id: '8',
      total: 5,
      status: 'Chờ xác nhận',
      shipping: 'Giao hàng nhanh',
      actions: 'Xem chi tiết',
    },
    { id: '9', total: 8, status: 'Đang giao', shipping: 'J&T Express', actions: 'Xem chi tiết' },
    { id: '10', total: 1, status: 'Đã giao', shipping: 'VNPost', actions: 'Xem chi tiết' },
    {
      id: '11',
      total: 2,
      status: 'Đã huỷ',
      shipping: 'Giao hàng tiết kiệm',
      actions: 'Xem chi tiết',
    },
    {
      id: '12',
      total: 9,
      status: 'Chờ lấy hàng',
      shipping: 'J&T Express',
      actions: 'Xem chi tiết',
    },
    {
      id: '12',
      total: 9,
      status: 'Chờ lấy hàng',
      shipping: 'J&T Express',
      actions: 'Xem chi tiết',
    },
    {
      id: '13',
      total: 3,
      status: 'Đang giao',
      shipping: 'Giao hàng nhanh',
      actions: 'Xem chi tiết',
    },
    { id: '14', total: 6, status: 'Đang giao', shipping: 'VNPost', actions: 'Xem chi tiết' },
    {
      id: '15',
      total: 2,
      status: 'Chờ xác nhận',
      shipping: 'Giao hàng nhanh',
      actions: 'Xem chi tiết',
    },
    { id: '16', total: 8, status: 'Đang giao', shipping: 'J&T Express', actions: 'Xem chi tiết' },
    { id: '17', total: 7, status: 'Đã giao', shipping: 'VNPost', actions: 'Xem chi tiết' },
  ];
}

export default async function ALLSeller() {
  const data = await getData();

  return (
    <Card className="rounded shadow-none">
      <CardHeader className="m-0">
        <div className="flex justify-between items-center">
          <CardTitle className="font-medium text-lg uppercase">Tất cả</CardTitle>
          <div className="flex gap-4">
            <Button className="text-xs" variant={'outline'}>
              Xuất
            </Button>
            <Button className="text-xs" variant={'outline'}>
              Lịch sử xuất báo cáo
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
              Tất cả
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Chờ xác nhận
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Chờ lấy hàng
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Đang giao
            </Button>
            <Button
              variant={'ghost'}
              className="text-xs px-0 border-b-2 border-primary/0 rounded-none"
            >
              Đã giao
            </Button>
          </div>
          <Separator />
        </div>
        <div>
          <div className="flex justify-between gap-6">
            <Select>
              <div className="flex flex-1">
                <SelectTrigger className="rounded w-[300px] text-xs shadow-none rounded-r-none !text-secondary-foreground">
                  <SelectValue placeholder="Mã đơn hàng" />
                </SelectTrigger>
                <Input
                  className="rounded-l-none bl-none shadow-none text-xs placeholder:text-xs"
                  placeholder="Nhập mã đơn hàng"
                />
              </div>
              <SelectContent>
                <SelectItem value="light">Mã Đơn hàng</SelectItem>
                <SelectItem value="dark">Tên người mua</SelectItem>
                <SelectItem value="system">Sản phẩm</SelectItem>
                <SelectItem value="system">Mã vận đơn</SelectItem>
                <SelectItem value="system">Mã yêu cầu trả hàng</SelectItem>
                <SelectItem value="system">Mã vận đơn cho yêu cầu trả hàng</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <div className="flex flex-1 w-full">
                <SelectTrigger className="rounded text-xs shadow-none !text-secondary-foreground w-full justify-between">
                  <div className="flex gap-2">
                    <SelectValue placeholder="Tất cả đơn vị vận chuyển" />
                    <span className="text-muted-foreground">Đơn vị vận chuyển</span>
                  </div>
                </SelectTrigger>
              </div>
              <SelectContent>
                <SelectItem value="light">Mã Đơn hàng</SelectItem>
                <SelectItem value="dark">Tên người mua</SelectItem>
                <SelectItem value="system">Sản phẩm</SelectItem>
                <SelectItem value="system">Mã vận đơn</SelectItem>
                <SelectItem value="system">Mã yêu cầu trả hàng</SelectItem>
                <SelectItem value="system">Mã vận đơn cho yêu cầu trả hàng</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <Button variant={'outline'} className="text-xs">
                Áp dụng
              </Button>
              <Button variant={'outline'} className="text-xs">
                Đặt lại
              </Button>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-sm">17 Đơn hàng</h1>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
