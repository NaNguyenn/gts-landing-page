import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-20">
      <div className="bg-primary -z-10 absolute top-0 left-0 w-full h-2/3" />
      <div className="mb-20 max-w-3xl mx-auto text-center text-white font-bold">
        <h1 className="mb-7 text-5xl">
          Cung cấp nền tảng chuyển đổi số, số hóa cho doanh nghiệp.
        </h1>
        <p className="mb-12 text-lg font-semibold">
          Miễn phí dùng thử sản phẩm{" "}
          <span className="text-2xl text-secondary">30</span> ngày - Tư vấn
          triển khai, giải pháp cho doanh nghiệp.
        </p>
        <Link href="/" className="px-10 py-5 bg-secondary rounded-lg">
          Đăng ký dùng thử 30 ngày
        </Link>
      </div>
      <div className="mb-24 flex items-center justify-center gap-x-14 overflow-clip">
        <Image
          src="/images/image-1.png"
          alt="Product image 2"
          className="border-[10px] border-solid border-[#277DFC] rounded-xl"
          width={704}
          height={440}
        />
        <Image
          src="/images/image-1.png"
          alt="Product image 1"
          className="border-[10px] border-solid border-[#277DFC] rounded-xl"
          width={832}
          height={520}
        />
        <Image
          src="/images/image-1.png"
          alt="Product image 3"
          className="border-[10px] border-solid border-[#277DFC] rounded-xl"
          width={704}
          height={440}
        />
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-20">
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
      </div>
    </section>
  );
};

export default HeroSection;
