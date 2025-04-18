import { Card, CardContent } from '@/components/ui/card';
import SellerForm from '@/features/seller/components/register-seller';
import '@uploadthing/react/styles.css';

export default function FormSellerPage() {
  return (
    <Card className="rounded shadow-none">
      <CardContent>
        <SellerForm />
      </CardContent>
    </Card>
  );
}
