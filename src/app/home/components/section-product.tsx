import Image from "next/image";
import { productSectionListItems } from "../placeholder-data";

const ProductSection = () => {
  return (
    <section id="product" className="pt-[40px] pb-[200px]">
      <div className="max-w-[80%] mx-auto flex flex-col items-center lg:flex-row gap-[151px]">
        <div className="text-[#071B31]">
          <h2 className="mb-[28px] text-[40px] font-bold">
            Phần mềm quản lý doanh nghiệp{" "}
            <strong className="text-primary font-extrabold">V-ONE</strong>
          </h2>
          <p className="mb-[40px] text-[18px] font-semibold">
            Với V-ONE chúng tôi mang đến một dịch vụ chất lượng giúp các doanh
            nghiệp quản lý khách hàng đồng thời thúc đẩy công việc kinh doanh
            hiệu quả, thông minh cho các doanh nghiệp.
          </p>
          <ul className="flex flex-col gap-[20px] font-medium">
            {productSectionListItems.map((item, i) => (
              <li key={i} className="flex gap-[16px]">
                <Image
                  src="/icons/check-circle.svg"
                  alt="Check mark"
                  className="dark:invert"
                  width={20}
                  height={20}
                />
                <span className="opacity-70">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/images/image-1.png"
          alt="Product image 2"
          className="rounded-xl"
          width={680}
          height={425}
        />
      </div>
    </section>
  );
};

export default ProductSection;
