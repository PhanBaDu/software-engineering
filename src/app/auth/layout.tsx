import Header from '@/features/components/header';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header page="sign" />
      {children}
    </div>
  );
}
