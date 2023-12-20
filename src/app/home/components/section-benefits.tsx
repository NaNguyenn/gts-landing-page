import Link from "next/link";
import Image from "next/image";
import { benefitsCardsData } from "@/lib/placeholder-data";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-[#F2F7FF] pt-28 pb-20">
      <h2 className="max-w-3xl mx-auto mb-7 text-[2.5rem] text-center font-bold">
        Lợi ích khi chọn <strong className="text-primary">V-ONE</strong> làm
        giải pháp cho doanh nghiệp của bạn
      </h2>
      <p className="max-w-3xl mx-auto mb-20 text-center text-lg font-medium">
        V-One nằm trong hệ sinh thái các sản phẩm số của GTS Việt Nam hướng tới
        mục địch hỗ trợ xây dựng hệ thống vận hành cho các doanh nghiệp thông
        qua chuyển đổi số.
      </p>
      <div className="mb-20 max-w-sm mx-auto grid gap-7 md:max-w-4xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3">
        {benefitsCardsData.map((benefit, i) => (
          <div
            key={i}
            className="bg-white rounded-lg flex p-6 gap-5 items-start shadow-[0_8px_20px_0_rgba(9,40,75,0.05),-4px_0_0_0_#0255CF]"
          >
            <Image
              src={benefit.image.src}
              alt={`Benefit ${i + 1}`}
              width={benefit.image.width}
              height={benefit.image.height}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm font-medium opacity-70">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/home"
        className="max-w-xs mx-auto px-5 py-3 font-bold text-white flex items-center justify-center bg-secondary rounded-lg"
      >
        Đăng ký dùng thử
      </Link>
    </section>
  );
};

export default BenefitsSection;
