import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Rejected() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-1 justify-center items-center w-96">
        <span className="text-primary">
          Shop của bạn đã bị từ chối vì thông tin bạn gửi sai sự thật!
        </span>
      </div>
      <div className="flex gap-2 justify-between items-center w-96">
        <Link href={'/'} className="w-full">
          <Button className="text-xs w-full" variant={'outline'}>
            Về trang chính
          </Button>
        </Link>
        <Link href={'/seller/form'} className="w-full">
          <Button className="text-xs w-full">Tiếp tục đăng ký người bán</Button>
        </Link>
      </div>
    </div>
  );
}
