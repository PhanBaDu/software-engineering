import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/user';

export async function getCurrentShop() {
  const user = await getCurrentUser();

  if (!user || !user.id) return null;

  const shop = await prisma.shop.findUnique({
    where: { userId: user.id },
  });

  return shop;
}
