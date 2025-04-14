import { Button } from '@/components/ui/button';

export default function Voucher() {
  return (
    <div className="h-52 overflow-hidden bg-primary-foreground">
      <div className="relative border-t border-l border-r rounded-t border-primary h-[70%] flex flex-col items-center justify-center">
        <h1 className="text-lg text-primary font-black uppercase">Giảm</h1>
        <h1 className="text-lg text-primary font-black uppercase">150k</h1>
        <span className="text-muted-foreground">Đơn tối thiểu 2 triệu</span>
        <div className="absolute -left-2 -bottom-1.5 w-3 h-3 bg-background rounded-full border border-primary z-10"></div>
        <div className="absolute -right-2 -bottom-1.5 w-3 h-3 bg-background rounded-full border border-primary z-10"></div>
      </div>
      <div className="w-full border-t border-dashed border-primary"></div>
      <div className="border-b border-l border-r rounded-b border-primary h-[29%] p-2 flex items-center justify-center">
        <Button className="text-xs w-full">Lưu mã giảm</Button>
      </div>
    </div>
  );
}
