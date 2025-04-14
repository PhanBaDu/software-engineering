import { Card, CardContent } from '@/components/ui/card';
import Product from '@/features/components/product';
import Voucher from '@/features/search/components/voucher';
import { Eye, Star } from 'lucide-react';
import Image from 'next/image';

export default function Shop() {
  return (
    <Card className="p-2 shadow-none border-none cursor-pointer">
      <CardContent className="p-0 flex justify-between gap-2">
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <Image src={'/image.png'} alt="shop" width={70} height={70} />
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-center">Top các mẫu phím gaming</h2>
            <ul className="flex items-center gap-4 justify-center">
              <li className="bg-primary text-background px-1 rounded">
                <span className="text-[10px]">Yêu thích+</span>
              </li>
              <span className="h-3 w-[1px] bg-primary/50 rounded"></span>
              <li className="flex gap-1 items-center">
                <Star size={12} className="mb-[2px] text-yellow-300 fill-amber-300" />
                <span className="text-primary">4.9</span>
              </li>
              <span className="h-3 w-[1px] bg-primary/50 rounded"></span>
              <li className="flex items-center gap-1 text-primary">
                <span>375k Theo dõi</span>
                <Eye size={12} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-2 grid grid-cols-4 gap-4">
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
        </div>
      </CardContent>
    </Card>
  );
}
