import Link from "next/link";
import React from "react";

const BannerSection = () => {
  return (
    <section
      id="banner"
      className="bg-primary pt-10 pb-28 flex flex-col items-center justify-center text-center xl:flex-row xl:text-start xl:gap-56"
    >
      <h2 className="max-w-2xl text-white text-4xl font-bold">
        Hãy liên hệ ngay với chúng tôi và nhận được tư vấn thêm về dịch vụ
      </h2>
      <Link
        href="/home"
        className="mt-14 max-w-[270px] px-5 py-3 font-bold text-white flex items-center justify-center bg-secondary rounded-lg"
      >
        Đăng ký dùng thử
      </Link>
    </section>
  );
};

export default BannerSection;
