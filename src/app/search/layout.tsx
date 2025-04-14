import Header from '@/features/components/header';

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-32 container_w">
      <Header page="main" />
      <main>{children}</main>
    </div>
  );
}
