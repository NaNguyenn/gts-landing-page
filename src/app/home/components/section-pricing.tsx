import { PricingOptionsEnum } from "@/lib/definitions";
import { pricingListItems, pricingOptionsData } from "@/lib/placeholder-data";
import Image from "next/image";
import React, { useState } from "react";
import {
  favouriteBannerIcon,
  heavyCheckmarkBlueIcon,
  heavyCheckmarkIcon,
  springArrowIcon,
} from "../../../../public/icons";
import { formatMoneyNoUnit } from "@/utils/common";
import Button from "@/components/ui/button";
import clsx from "clsx";

const PricingSection = () => {
  const [pricingOptions, setPricingOptions] = useState<PricingOptionsEnum>(
    PricingOptionsEnum.MONTHLY
  );
  return (
    <section id="pricing" className="relative pt-28 pb-40">
      <div className="bg-primary -z-10 absolute top-0 left-0 w-full h-3/5" />
      <h2 className="mb-6 max-w-2xl mx-auto text-white text-[2.5rem] font-bold text-center">
        Quản lý thông minh cùng V-ONE với mức giá tốt nhất
      </h2>
      <p className="mb-12 max-w-2xl mx-auto text-white text-lg text-center">
        Các tính năng hỗ trợ tối đa cho việc quản lý doanh nghiệp.
      </p>
      <ul className="mb-24 mx-auto grid grid-cols-2 max-w-sm md:max-w-3xl md:grid-cols-3">
        {pricingListItems.map((item, i) => (
          <li key={i} className="flex gap-6 items-center">
            <Image src={heavyCheckmarkIcon} alt="checkmark" />
            <span className="text-xl font-semibold text-white">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
      <div className="mb-14 max-w-xs mx-auto flex rounded-[20px] border border-solid border-[#F2F7FF] relative">
        <div className="absolute -top-10 right-2 py-1 px-3 rounded-[40px] bg-[#FFD74A] flex items-center justify-center font-semibold">
          - 10 %
        </div>
        <Image
          src={springArrowIcon}
          alt="arrow icon"
          className="absolute -top-7 -right-5"
        />
        <div
          className={clsx(
            "basis-full font-semibold py-2 px-6 flex items-center justify-center rounded-[20px]",
            pricingOptions === PricingOptionsEnum.MONTHLY
              ? "bg-white text-primary"
              : "bg-primary text-white"
          )}
          onClick={() => setPricingOptions(PricingOptionsEnum.MONTHLY)}
        >
          Theo tháng
        </div>
        <div
          className={clsx(
            "basis-full font-semibold py-2 px-6 flex items-center justify-center rounded-[20px]",
            pricingOptions === PricingOptionsEnum.ANNUAL
              ? "bg-white text-primary"
              : "bg-primary text-white"
          )}
          onClick={() => setPricingOptions(PricingOptionsEnum.ANNUAL)}
        >
          Theo năm
        </div>
      </div>
      <div className="flex items-center justify-center gap-7 flex-col xl:flex-row">
        {pricingOptionsData.map((option, i) => (
          <div
            key={i}
            className={clsx(
              "w-[23rem] rounded-[20px] shadow-[0_32px_64px_0_rgba(27,34,37,0.10)] flex flex-col relative",
              i === 1 ? "bg-primary2 h-[44rem]" : "bg-white h-[38rem]"
            )}
          >
            {i === 1 && (
              <Image
                src={favouriteBannerIcon}
                alt="favourite"
                className="absolute -top-3 right-4"
              />
            )}
            <h3
              className={clsx(
                "px-8 py-6 uppercase text-xl font-bold border-b border-solid",
                i === 1 ? "text-white" : "text-dark1"
              )}
            >
              {option.name}
            </h3>
            <div className="p-8 flex-1 border-b border-solid">
              <p
                className={clsx(
                  "text-xl font-bold mb-12",
                  i === 1 ? "text-white" : "text-primary"
                )}
              >
                <strong className="text-4xl">
                  {pricingOptions === PricingOptionsEnum.MONTHLY
                    ? formatMoneyNoUnit(option.monthlyPrice)
                    : formatMoneyNoUnit((option.monthlyPrice * 12 * 90) / 100)}
                </strong>
                vnđ
              </p>
              <p
                className={clsx("mb-12", i === 1 ? "text-white" : "text-black")}
              >
                {option.description}
              </p>
              <p
                className={clsx(
                  "font-bold mb-6",
                  i === 1 ? "text-white" : "text-dark1"
                )}
              >{`Gói ${option.name} bao gồm :`}</p>
              <ul
                className={clsx(
                  "text-lg font-semibold flex flex-col gap-6",
                  i === 1 ? "text-white" : "text-dark1"
                )}
              >
                {option.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-6">
                    <Image
                      src={
                        i === 1 ? heavyCheckmarkIcon : heavyCheckmarkBlueIcon
                      }
                      alt="checkmark"
                      width={20}
                    />
                    <span
                      className={clsx(
                        "text-xl",
                        i !== 1 && j === 0 && "text-primary"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 py-6 flex items-center">
              <Button
                className={clsx(
                  "flex-1 px-5 py-3 text-center border border-solid rounded-[10px]",
                  i === 1
                    ? "text-white border-white bg-primary2"
                    : "text-primary bg-white border-primary"
                )}
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
