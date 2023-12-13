import { productSectionListItems } from "@/lib/placeholder-data";
import Image from "next/image";
import {
  hero1Image,
  productAttach1Image,
  productAttach2Image,
  productAttach3Image,
} from "../../../../public/images";

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
        <div className="relative">
          <Image
            src={hero1Image}
            alt="v-one showcase"
            className="rounded-xl"
            priority
          />
          <Image
            src={productAttach1Image}
            alt="attachment image 1"
            className="absolute -top-20 left-24"
          />
          <Image
            src={productAttach1Image}
            alt="attachment image 2"
            className="absolute -top-20 left-60"
          />
          <Image
            src={productAttach1Image}
            alt="attachment image 3"
            className="absolute -top-20 left-96"
          />
          <Image
            src={productAttach2Image}
            alt="attachment image 4"
            className="absolute bottom-10 -right-20"
          />
          <Image
            src={productAttach3Image}
            alt="attachment image 5"
            className="absolute -bottom-16 -left-14"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
