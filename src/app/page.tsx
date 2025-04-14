import Header from '@/features/components/header';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Product from '@/features/components/product';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default async function HomePage() {
  return (
    <div className="pt-32 container_w">
      <Header page="main" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Card className="select-none rounded border-b-4 border-b-primary shadow-none py-4">
            <CardTitle className="tracking-wider font-semibold uppercase text-sm text-center text-primary">
              Sản phẩm tốt giá tốt
            </CardTitle>
          </Card>
          <Card className="select-none rounded border-dashed border-primary shadow-none p-0">
            <CardContent className="p-1 flex flex-col gap-1">
              <div className="grid grid-cols-6 gap-1">
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
                <Product ad={true} />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="w-96 flex border-dashed border-primary items-center justify-center text-xs hover:bg-primary duration-100 hover:text-background"
                  variant={'outline'}
                >
                  Xem thêm
                  <ChevronDown />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-1">
          <Card className="select-none rounded border-b-4 border-b-primary shadow-none py-4">
            <CardTitle className="tracking-wider font-semibold uppercase text-sm text-center text-primary">
              gợi ý hôm nay
            </CardTitle>
          </Card>
          <Card className="select-none rounded border-dashed border-primary shadow-none p-0">
            <CardContent className="p-1 flex flex-col gap-1">
              <div className="grid grid-cols-6 gap-1">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="w-96 flex border-dashed border-primary items-center justify-center text-xs hover:bg-primary duration-100 hover:text-background"
                  variant={'outline'}
                >
                  Xem thêm
                  <ChevronDown />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
