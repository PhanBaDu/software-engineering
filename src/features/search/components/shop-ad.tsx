import Shop from '@/features/search/components/shop';
import { PackageSearch } from 'lucide-react';

export default function Advertisement() {
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="absolute font-bold -bottom-2 -left-2 bg-muted text-primary p-1 text-[10px] rounded">
        Quảng cáo🔥
      </div>
      <div className="text-sm uppercase flex items-center gap-2 border-b border-dashed pb-1 border-primary">
        <PackageSearch size={14} strokeWidth={2} />
        <h1>
          shop liên quan đến "<span className="text-primary">Phím</span>"
        </h1>
      </div>
      <Shop />
    </div>
  );
}
