import React from "react";
import { featuresCardsData } from "../placeholder-data";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section>
      <div>
        <h2>Tính năng nổi bật</h2>
        <p>
          V-One nằm trong hệ sinh thái các sản phẩm số của GTS Việt Nam hướng
          tới mục địch hỗ trợ xây dựng hệ thống vận hành cho các doanh nghiệp
          thông qua chuyển đổi số.
        </p>
        <div>
          {featuresCardsData.map((feature, i) => (
            <div key={i}>
              <div>
                <Image
                  src={feature.image.src}
                  alt={`Feature ${i + 1}`}
                  className="dark:invert"
                  width={feature.image.width}
                  height={feature.image.height}
                />
              </div>
              <div>
                <h3>{feature.title}</h3>
                <div
                  className={`w-[32px] h-[6px] rounded-[14px] bg-[${feature.color}]`}
                />
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
