import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Product({ ad }: { ad?: boolean }) {
  const name = 'Card đồ họa Rog RTX 5090 Card đồ họa Rog RTX 5090';
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/image.png" className="rounded cursor-pointer shadow-none block">
          <Card className="shadow-none rounded relative hover:border overflow-hidden hover:border-primary duration-200 p-0">
            {ad && (
              <div className="absolute bg-primary-foreground text-primary font-bold px-2 rounded flex gap-1">
                <span>Hot</span>
                <span>🔥</span>
              </div>
            )}
            <CardContent className="p-0">
              <Image
                src="/image.png"
                alt="test"
                width={1000}
                height={200}
                className="h-48 object-contain"
              />
            </CardContent>
            <CardFooter className="[.border-t]:pt-2 p-1 m-0 text-sm flex flex-col gap-1 justify-start items-start border-t">
              <div className="flex gap-1 flex-wrap">
                <span className="bg-none">
                  {name.length >= 20 ? name.slice(0, 40) + '...' : name}
                </span>
              </div>
              <div className="flex justify-between w-full gap-1 text-primary items-center">
                <div>
                  <span>100.000.000</span>
                  <span className="text-xs underline ml-1">đ</span>
                </div>
                <Button className="text-xs px-[6px] py-[14px] h-0 bg-primary">
                  <span className="text-background">Thêm giỏ</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="cursor-pointer w-full text-xs px-1 py-[6px] bg-primary text-muted border-none -mt-1 rounded-t-none">
        Tìm sản phẩm tương tự
      </HoverCardContent>
    </HoverCard>
  );
}
