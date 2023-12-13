import { procedureStepsData } from "@/lib/placeholder-data";
import backgroundProcedure from "../../../../public/images/background-procedure.svg";
import Image from "next/image";
import clsx from "clsx";

const ProcedureSection = () => {
  return (
    <section id="procedure" className="bg-[#F2F7FF] pt-28 pb-60 relative z-0">
      <Image
        src={backgroundProcedure}
        alt="procedure section background"
        className="absolute bottom-0 right-0 -z-10"
      />
      <div className="mx-auto max-w-xs md:max-w-4xl xl:max-w-7xl">
        <h2 className="max-w-xs md:max-w-2xl mb-7 text-[2.5rem] font-bold">
          Cùng <strong className="text-primary">V-One</strong> xây dựng quy
          trình bán hàng hiệu quả hơn
        </h2>
        <p className="max-w-xs md:max-w-2xl mb-20 text-lg font-medium">
          Với V-One bạn hoàn toàn chủ động trong việc xây dựng quy trình bán
          hàng phù hợp vơi doanh nghiệp của bạn.
        </p>
        <ol className="lg:max-w-5xl grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {procedureStepsData.map((step, i) => (
            <li
              key={step.order}
              className={clsx(
                "h-24 px-5 py-6 rounded-lg flex items-center gap-4",
                i === procedureStepsData.length - 1
                  ? "bg-primary shadow-[0_12px_24px_0_rgba(9,40,75,0.10),-4px_0_0_0_#FDBA02]"
                  : "bg-white shadow-[0_8px_20px_0_rgba(9,40,75,0.05),-4px_0_0_0_#0255CF]"
              )}
            >
              <span
                className={clsx(
                  "text-2xl font-extrabold",
                  i === procedureStepsData.length - 1
                    ? "text-secondary"
                    : "opacity-20"
                )}
              >
                {step.order}
              </span>
              <span
                className={clsx(
                  "text-lg font-semibold",
                  i === procedureStepsData.length - 1
                    ? "text-white"
                    : "text-dark1"
                )}
              >
                {step.value}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcedureSection;
