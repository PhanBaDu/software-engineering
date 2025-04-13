'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateOrUpdateShopAction } from '@/lib/actions';

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
import { UploadButton } from '@/utils/uploadthing';
import Image from 'next/image';
import { ImageUp, Loader } from 'lucide-react';
import { useActionState, useState, useTransition } from 'react';

export default function SellerForm() {
  const [urlIdNumber, setUrlIdNumber] = useState<string | undefined>(undefined);
  const [urlIdUserNumber, setUrlIdUserNumber] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingIdUser, setLoadingIdUser] = useState<boolean>(false);
  const [result, action] = useActionState(CreateOrUpdateShopAction, undefined);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof shopInformation>>({
    resolver: zodResolver(shopInformation),
    defaultValues: {
      shopName: '',
      email: '',
      phoneNumber: '',
      idNumber: '',
      idImageUrl: '',
      userIdImageUrl: '',
    },
  });

  function onSubmit(values: z.infer<typeof shopInformation>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    startTransition(() => {
      // Wrap async action in startTransition
      action(formData);
    });
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
                      className="border outline-none placeholder:text-xs text-xs"
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
                      className="border outline-none placeholder:text-xs text-xs"
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
                      className="border outline-none placeholder:text-xs text-xs"
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
                      className="border outline-none placeholder:text-xs text-xs"
                      placeholder="Nhập số căn cước công dân..."
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Hãy nhập mã số căn cước đúng định dạng!
                  </FormDescription>
                  <div className="h-4 flex justify-end">
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />
            {/* IDNUMBER */}
            <div>
              <FormField
                control={form.control}
                name="idImageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Căn cước công dân</FormLabel>
                    <FormControl>
                      <Input
                        className="border outline-none placeholder:text-xs text-xs"
                        placeholder="Tải ảnh căn cước công dân..."
                        type="hidden"
                        {...field}
                      />
                    </FormControl>

                    <div className="flex justify-between gap-6">
                      <div className="w-full rounded h-36 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center">
                        {loading && (
                          <span className="text-xs text-muted-foreground">Đang xử lý ảnh!</span>
                        )}
                        {urlIdNumber && !loading && (
                          <Image
                            src={urlIdNumber}
                            alt="Lỗi hệ thống vui lòng tải lại!"
                            width={144}
                            height={144}
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                        {!loading && !urlIdNumber && <span className="text-xs">Chưa có ảnh!</span>}
                        <FormMessage className="text-xs" />
                      </div>
                      <div className="w-full rounded h-36 border border-dashed border-muted-foreground/30 flex flex-col gap-1 items-center justify-center">
                        <ImageUp className="text-muted-foreground" strokeWidth={1} size={40} />
                        <UploadButton
                          appearance={{
                            button({ ready, isUploading }) {
                              return {
                                fontSize: '12px',
                                backgroundColor: '#2b7fff',
                                ...(ready && { color: '#ecfdf5' }),
                                ...(isUploading && { color: '#ffffff' }),
                              };
                            },
                            allowedContent: {
                              color: '#71717b',
                              fontSize: '12px',
                            },
                          }}
                          endpoint="imageUploader"
                          content={{
                            button({ ready, isUploading }) {
                              if (ready && !isUploading)
                                return <span className="text-xs">Tải ảnh lên!</span>;
                              return <Loader className="animate-spin" size={14} />;
                            },
                            allowedContent({ ready, isUploading, uploadProgress }) {
                              if (!ready) return 'Hệ thống đang kiểm tra, vui lòng đợi!';
                              if (isUploading && uploadProgress) {
                                return (
                                  <>
                                    <span>Đang tải ảnh: </span>
                                    <span className="text-[#2b7fff]">{uploadProgress}%</span>
                                  </>
                                );
                              }
                              return <span className="text-xs">Vui lòng tải ảnh dưới 2MB</span>;
                            },
                          }}
                          onUploadProgress={(progress) => {
                            setLoading(progress <= 100);
                          }}
                          onClientUploadComplete={(res) => {
                            const url = res[0].ufsUrl;
                            setUrlIdNumber(url);
                            form.setValue('idImageUrl', url);
                            form.clearErrors('idImageUrl');
                            setLoading(false);
                          }}
                          onUploadError={(error: Error) => {
                            setUrlIdNumber(undefined);
                            setLoading(false);
                            if (error.message.includes('FileSizeMismatch')) {
                              form.setError('idImageUrl', {
                                message: 'Dung lượng ảnh quá 2MB!',
                              });
                              return;
                            }
                            form.setError('idImageUrl', {
                              message: 'Lỗi hệ thống, vui lòng tải ảnh mới lần nữa!',
                            });
                          }}
                        />
                      </div>
                    </div>
                    <FormDescription className="text-xs">
                      Hãy thêm hình ảnh căn cước công dân của bạn!
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormField
                control={form.control}
                name="userIdImageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Ảnh căn cước và mặt của bạn chung một khung hình
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border outline-none placeholder:text-xs text-xs"
                        placeholder="Tải ảnh bạn và căn cước công dân chung một khung hình..."
                        type="hidden"
                        {...field}
                      />
                    </FormControl>

                    <div className="flex justify-between gap-6">
                      <div className="w-full rounded h-36 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center">
                        {loadingIdUser && (
                          <span className="text-xs text-muted-foreground">Đang xử lý ảnh!</span>
                        )}
                        {urlIdUserNumber && !loadingIdUser && (
                          <Image
                            src={urlIdUserNumber}
                            alt="Lỗi hệ thống vui lòng tải lại!"
                            width={144}
                            height={144}
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                        {!loadingIdUser && !urlIdUserNumber && (
                          <span className="text-xs">Chưa có ảnh!</span>
                        )}
                        <FormMessage className="text-xs" />
                      </div>
                      <div className="w-full rounded h-36 border border-dashed border-muted-foreground/30 flex flex-col gap-1 items-center justify-center">
                        <ImageUp className="text-muted-foreground" strokeWidth={1} size={40} />
                        <UploadButton
                          appearance={{
                            button({ ready, isUploading }) {
                              return {
                                fontSize: '12px',
                                backgroundColor: '#2b7fff',
                                ...(ready && { color: '#ecfdf5' }),
                                ...(isUploading && { color: '#ffffff' }),
                              };
                            },
                            allowedContent: {
                              color: '#71717b',
                              fontSize: '12px',
                            },
                          }}
                          endpoint="imageUploader"
                          content={{
                            button({ ready, isUploading }) {
                              if (ready && !isUploading)
                                return <span className="text-xs">Tải ảnh lên!</span>;
                              return <Loader className="animate-spin" size={14} />;
                            },
                            allowedContent({ ready, isUploading, uploadProgress }) {
                              if (!ready) return 'Hệ thống đang kiểm tra, vui lòng đợi!';
                              if (isUploading && uploadProgress) {
                                return (
                                  <>
                                    <span>Đang tải ảnh: </span>
                                    <span className="text-[#2b7fff]">{uploadProgress}%</span>
                                  </>
                                );
                              }
                              return <span className="text-xs">Vui lòng tải ảnh dưới 2MB</span>;
                            },
                          }}
                          onUploadProgress={(progress) => {
                            setLoadingIdUser(progress <= 100);
                          }}
                          onClientUploadComplete={(res) => {
                            const url = res[0].ufsUrl;
                            setUrlIdUserNumber(url);
                            form.setValue('userIdImageUrl', url);
                            form.clearErrors('userIdImageUrl');
                            setLoadingIdUser(false);
                          }}
                          onUploadError={(error: Error) => {
                            setUrlIdUserNumber(undefined);
                            setLoadingIdUser(false);
                            if (error.message.includes('FileSizeMismatch')) {
                              form.setError('userIdImageUrl', {
                                message: 'Dung lượng ảnh quá 2MB!',
                              });
                              return;
                            }
                            form.setError('userIdImageUrl', {
                              message: 'Lỗi hệ thống, vui lòng tải ảnh mới lần nữa!',
                            });
                          }}
                        />
                      </div>
                    </div>
                    <FormDescription className="text-xs">
                      Hãy thêm hình ảnh căn cước công dân của bạn!
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6 pt-4">
          <Button className="flex-1 text-xs" variant={'outline'}>
            Hủy
          </Button>
          <Button className="flex-1 text-xs" type="submit" disabled={isPending}>
            Xác nhận
          </Button>
        </div>
      </form>
    </Form>
  );
}
