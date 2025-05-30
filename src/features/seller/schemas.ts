import { z } from 'zod';

export const shopInformation = z.object({
  shopName: z.string().min(6, {
    message: 'Tên cửa hàng phải có ít nhất 6 ký tự.',
  }),
  email: z.string().email({
    message: 'Email không hợp lệ!',
  }),
  phoneNumber: z.string().min(10, {
    message: 'Số điện thoại phải có ít nhất 10 số!',
  }),
  idNumber: z.string().min(12, {
    message: 'Số CMND/CCCD không hợp lệ.',
  }),
  idImageUrl: z.string().min(1, {
    message: 'Vui lòng thêm ảnh căn cước công dân!',
  }),
  userIdImageUrl: z.string().min(1, {
    message: 'Vui lòng thêm ảnh căn cước công dân và bạn!',
  }),
});

export type ShopInformation = z.infer<typeof shopInformation>;
