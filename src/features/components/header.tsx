import Navbar from '@/features/components/navbar';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  page: string;
  // main
  // sign
}

export default function Header({ page }: Props) {
  if (page === 'main')
    return (
      <div className="fixed bg-primary top-0 left-0 right-0">
        <div className="flex justify-between container_w">
          <Navbar />
        </div>
      </div>
    );

  if (page === 'sign')
    return (
      <div className="fixed bg-primary top-0 left-0 right-0 py-4">
        <div className="flex justify-between container_w items-center">
          <Link href={'/'}>
            <Image src={'/secondary.svg'} alt="Logo Tech Mall" width={50} height={50}></Image>
          </Link>
          <h1 className="text-background text-xl font-semibold">ĐĂNG NHẬP</h1>
        </div>
      </div>
    );
}
