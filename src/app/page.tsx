import Header from '@/features/components/header';
import { Card, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="pt-32">
      <Header page="main" />
      <Card className="select-none rounded border-b-4 border-b-primary shadow-none py-4">
        <CardTitle className="tracking-wider font-semibold uppercase text-sm text-center text-primary">
          gợi ý hôm nay
        </CardTitle>
      </Card>
    </div>
  );
}
