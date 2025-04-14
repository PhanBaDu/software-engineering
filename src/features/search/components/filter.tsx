import { Sparkles } from 'lucide-react';

export default function Filter() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm uppercase flex items-center gap-2">
        <Sparkles size={14} strokeWidth={2} />
        <h1 className="font-semibold">Bộ lọc tìm kiếm</h1>
      </div>
    </div>
  );
}
