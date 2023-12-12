import React from "react";
import Image from "next/image";
import { featuresCardsData } from "@/lib/placeholder-data";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-40">
      <h2 className="mb-7 max-w-3xl mx-auto text-[2.5rem] text-center font-bold">
        Tính năng nổi bật
      </h2>
      <p className="mb-20 max-w-3xl mx-auto text-center text-lg font-medium">
        V-One nằm trong hệ sinh thái các sản phẩm số của GTS Việt Nam hướng tới
        mục địch hỗ trợ xây dựng hệ thống vận hành cho các doanh nghiệp thông
        qua chuyển đổi số.
      </p>
      <div className="max-w-sm mx-auto grid gap-7 md:max-w-4xl md:grid-cols-3 xl:max-w-7xl xl:grid-cols-4">
        {featuresCardsData.map((feature, i) => (
          <div key={i} className="max-w-[270px] mx-auto">
            <Image
              src={feature.image.src}
              alt={`Feature ${i + 1}`}
              className="rounded-t-lg h-[200px] object-cover"
              width={feature.image.width}
            />
            <div className="p-4 rounded-b-lg border border-solid border-[#E8EDF0]">
              <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
              <div
                className={`mb-4 w-8 h-[6px] rounded-[14px] bg-[${feature.color}]`}
              />
              <p className="text-sm font-medium opacity-70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
