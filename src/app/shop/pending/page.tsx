import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pending() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-1 justify-center items-center">
        <span>Bạn đã tạo shop thành công!</span>
        <span>Admin sẽ xem xét thông tin bạn gửi có xác thật!</span>
        <span>Admin sẽ xem xét trong thời gian sớm nhất nên bạn hãy chờ!</span>
      </div>
      <Link href={'/'}>
        <Button className="text-xs">Về trang chính</Button>
      </Link>
    </div>
  );
}
