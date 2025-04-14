import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight, PackageSearch } from 'lucide-react';

export default function SearchResults() {
  return (
    <div className="flex flex-col gap-2 pb-2 border-b border-dashed border-primary">
      <div className="text-sm uppercase flex items-center gap-2">
        <PackageSearch size={14} strokeWidth={2} />
        <h1>
          Kết quả tìm kiếm cho từ khóa "<span className="text-primary">Phím</span>"
        </h1>
      </div>
      <div className="flex justify-between bg-muted p-1 rounded">
        <ul className="flex items-center gap-4">
          <li className="text-sm text-muted-foreground">Sắp xếp theo</li>
          <li>
            <Button className="text-xs">Liên quan</Button>
          </li>
          <li>
            <Button variant={'outline'} className="text-xs">
              Mới nhất
            </Button>
          </li>
          <li>
            <Button variant={'outline'} className="text-xs">
              Bán chạy
            </Button>
          </li>
          <li>
            <Button variant={'outline'} className="text-xs w-40 flex justify-between items-center">
              <span>Giá</span>
              <ChevronDown />
            </Button>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <div>
            <span className="text-primary">1</span>/20
          </div>
          <li>
            <Button variant={'outline'} disabled={true} size={'icon'}>
              <ChevronLeft />
            </Button>
            <Button variant={'outline'} size={'icon'}>
              <ChevronRight />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
