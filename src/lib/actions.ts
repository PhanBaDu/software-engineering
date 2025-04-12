'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/user';
import { redirect } from 'next/navigation';

export async function CreateShopAction(prevState: any, formData: FormData) {
  const user = await getCurrentUser();

  const createShop = await prisma.shop.create({
    data: {
      userId: user?.id as number,
      shopName: formData.get('shopName') as string,
      email: formData.get('email') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      idNumber: formData.get('idNumber') as string,
      idImageUrl: formData.get('idImageUrl') as string,
      userIdImageUrl: formData.get('userIdImageUrl') as string,
    },
  });

  return redirect(`/shop/dashboard/${createShop.id}`);
}
