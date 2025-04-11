import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function SellerPage() {
  return (
    <div className="pt-32 flex items-center justify-center">
      <Card className="rounded shadow-none w-[500px]">
        <CardHeader className="text-center">
          <CardTitle className="text-primary">CHÀO MỪNG BẠN ĐẾN VỚI TRANG NGƯỜI BÁN</CardTitle>
          <CardDescription className="text-xs">
            Để trở thành người bán hàng bạn cần phải chấp thuận các điều khoản và nhập đúng và đầy
            đủ thông tin cá nhân!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between gap-6 items-center">
          <Button asChild variant={'outline'}>
            <Link className="text-xs" href={'/'}>
              <ArrowLeft className="text-primary" />
              <span className="text-primary">Từ chối và trở về trang chủ</span>
            </Link>
          </Button>
          <Button asChild>
            <Link className="text-xs" href={'/seller/form'}>
              <span>Đến nơi đăng ký làm người bán</span>
              <ArrowRight />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
