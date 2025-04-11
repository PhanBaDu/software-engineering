import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import argon2 from 'argon2';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) throw new Error('Something went wrong');

  let dbUser = await prisma.user.findUnique({
    where: {
      email: user.email || undefined,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        fullName: user.given_name + ' ' + user.family_name,
        email: user.email || '',
        password: await argon2.hash(user.id),
        avatarUrl: user.picture || `https://avatar.vercel.sh/${user.given_name}`,
        phoneNumber: null,
        gender: 'OTHER',
      },
    });
  }
  return NextResponse.redirect('http://localhost:3000/');
}
