import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-30 py-5 bg-primary">
      <div className="mx-auto flex items-center justify-between h-11 max-w-xs md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        <div className="shrink-0">
          <Image
            src="/gts-logo-white.svg"
            alt="GTS Logo"
            width={120}
            height={44}
            priority
          />
        </div>

        <nav className="hidden md:flex md:grow text-center">
          <ul className="flex md:gap-x-2 lg:gap-x-4 xl:gap-x-10 grow justify-end items-center">
            <li>
              <Link
                href="/home"
                className="py-[14px] font-medium text-white hover:text-secondary flex items-center "
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="py-[14px] font-medium text-white hover:text-secondary flex items-center "
              >
                Vì sao cần CRM
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="py-[14px] font-medium text-white hover:text-secondary flex items-center "
              >
                Giải pháp
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="py-[14px] font-medium text-white hover:text-secondary flex items-center "
              >
                Tính năng
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="py-[14px] font-medium text-white hover:text-secondary flex items-center"
              >
                Khách hàng
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="px-5 py-3 font-bold text-white flex items-center justify-center bg-secondary rounded-lg"
              >
                Đăng ký dùng thử
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
