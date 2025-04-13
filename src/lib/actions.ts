'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/user';
import { redirect } from 'next/navigation';

export async function CreateOrUpdateShopAction(prevState: any, formData: FormData) {
  const user = await getCurrentUser();

  if (!user?.id) return;

  const shopName = formData.get('shopName') as string;
  const email = formData.get('email') as string;
  const phoneNumber = formData.get('phoneNumber') as string;
  const idNumber = formData.get('idNumber') as string;
  const idImageUrl = formData.get('idImageUrl') as string;
  const userIdImageUrl = formData.get('userIdImageUrl') as string;

  const upsertedShop = await prisma.shop.upsert({
    where: { userId: user.id },
    update: {
      shopName,
      email,
      phoneNumber,
      idNumber,
      idImageUrl,
      status: 'PENDING',
      userIdImageUrl,
    },
    create: {
      userId: user.id,
      shopName,
      email,
      phoneNumber,
      idNumber,
      idImageUrl,
      status: 'PENDING',
      userIdImageUrl,
    },
  });

  return redirect(`/shop/dashboard/${upsertedShop.id}/all`);
}
