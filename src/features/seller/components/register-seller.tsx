'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { shopInformation } from '../schemas';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function SellerForm() {
  const form = useForm<z.infer<typeof shopInformation>>({
    resolver: zodResolver(shopInformation),
    defaultValues: {
      shopName: '',
      email: '',
      phoneNumber: '',
      idNumber: '',
      idImageUrl: undefined,
      userIdImageUrl: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof shopInformation>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-6">
          {/* Form Information */}
          <div className="flex flex-col w-6/12">
            <FormField
              control={form.control}
              name="shopName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Tên cửa hàng</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="border outline-none placeholder:text-xs"
                      placeholder="Nhập tên cửa hàng..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Hãy tên cửa hàng trên 6 ký tự!
                  </FormDescription>
                  <div className="h-4 flex justify-end">
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border outline-none placeholder:text-xs"
                      placeholder="Nhập email..."
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">Hãy nhập email của bạn!</FormDescription>
                  <div className="h-4 flex justify-end">
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Số điện thoại</FormLabel>
                  <FormControl>
                    <Input
                      className="border outline-none placeholder:text-xs"
                      placeholder="Nhập số điện thoại..."
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Hãy nhập số điện thoại của bạn!
                  </FormDescription>
                  <div className="h-4 flex justify-end">
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />
          </div>
          {/* Form Sensitive Information */}
          <div className="flex flex-col w-6/12">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Căn cước công dân</FormLabel>
                  <FormControl>
                    <Input
                      className="border outline-none placeholder:text-xs"
                      placeholder="Nhập tên cửa hàng..."
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Hãy căn cước đúng định dạng!
                  </FormDescription>
                  <div className="h-4 flex justify-end">
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between gap-6 pt-4">
          <Button className="flex-1 text-xs" variant={'outline'}>
            Hủy
          </Button>
          <Button className="flex-1 text-xs" type="submit">
            Xác nhận
          </Button>
        </div>
      </form>
    </Form>
  );
}
