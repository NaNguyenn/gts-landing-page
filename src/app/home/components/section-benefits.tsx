import Link from "next/link";
import { benefitsCardsData } from "../placeholder-data";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    <section>
      <div>
        <h2>
          Lợi ích khi chọn <strong>V-ONE</strong> làm giải pháp cho doanh nghiệp
          của bạn
        </h2>
        <p>
          V-One nằm trong hệ sinh thái các sản phẩm số của GTS Việt Nam hướng
          tới mục địch hỗ trợ xây dựng hệ thống vận hành cho các doanh nghiệp
          thông qua chuyển đổi số.
        </p>
        <div>
          {benefitsCardsData.map((benefit, i) => (
            <div key={i}>
              <Image
                src={benefit.image.src}
                alt={`Benefit ${i + 1}`}
                className="dark:invert"
                width={benefit.image.width}
                height={benefit.image.height}
              />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/">Đăng ký dùng thử</Link>
      </div>
    </section>
  );
};

export default BenefitsSection;
