import { productSectionListItems } from "@/lib/placeholder-data";
import Image from "next/image";
import { hero1Image } from "../../../../public/images";

const ProductSection = () => {
  return (
    <section id="product" className="pt-10 pb-48">
      <div className="max-w-[80%] mx-auto flex flex-col items-center xl:flex-row gap-36">
        <div className="text-[#071B31]">
          <h2 className="mb-7 text-[2.5rem] font-bold">
            Phần mềm quản lý doanh nghiệp{" "}
            <strong className="text-primary font-extrabold">V-ONE</strong>
          </h2>
          <p className="mb-10 text-lg font-semibold">
            Với V-ONE chúng tôi mang đến một dịch vụ chất lượng giúp các doanh
            nghiệp quản lý khách hàng đồng thời thúc đẩy công việc kinh doanh
            hiệu quả, thông minh cho các doanh nghiệp.
          </p>
          <ul className="flex flex-col gap-5 font-medium">
            {productSectionListItems.map((item, i) => (
              <li key={i} className="flex gap-4">
                <Image
                  src="/icons/check-circle.svg"
                  alt="Check mark"
                  width={20}
                  height={20}
                />
                <span className="opacity-70">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={hero1Image}
          alt="Product image 2"
          className="rounded-xl"
          width={680}
          height={425}
          priority
        />
      </div>
    </section>
  );
};

export default ProductSection;
