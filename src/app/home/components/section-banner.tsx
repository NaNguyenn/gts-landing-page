import Link from "next/link";
import React from "react";

const BannerSection = () => {
  return (
    <section>
      <div>
        <h2>
          Hãy liên hệ ngay với chúng tôi và nhận được tư vấn thêm về dịch vụ
        </h2>
        <Link href="/">Đăng ký dùng thử</Link>
      </div>
    </section>
  );
};

export default BannerSection;
