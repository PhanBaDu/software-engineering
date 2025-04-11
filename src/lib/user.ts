import { prisma } from '@/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function getCurrentUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) return null;

  const dbUser = await prisma.user.findUnique({
    where: { email: user.email || undefined },
    select: {
      id: true,
      email: true,
      fullName: true,
      avatarUrl: true,
      phoneNumber: true,
      gender: true,
      createdAt: true,
    },
  });

  return dbUser;
}
