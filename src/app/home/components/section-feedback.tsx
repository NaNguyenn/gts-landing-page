import React, { useState } from "react";
import Image from "next/image";
import { feedbacksData } from "@/lib/placeholder-data";
import clsx from "clsx";

const FeedbackSection = () => {
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const totalPages = Math.ceil(feedbacksData.length / pageSize);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentFeedbacks = feedbacksData.slice(firstIndex, lastIndex);

  return (
    <section id="feedback" className="py-20 bg-[#F2F7FF]">
      <h2 className="mb-28 max-w-3xl mx-auto text-[2.5rem] text-center font-bold">
        Phản hồi từ khách hàng
      </h2>
      <div className="mb-28 flex gap-20 justify-center flex-col md:flex-row">
        {currentFeedbacks.map((feedback, i) => (
          <div key={i} className="max-w-lg">
            <div className="mb-8 pl-7 pb-2 border-l-4 border-solid border-opacity-10 border-dark1">
              <Image
                src="/icons/quotation-mark.svg"
                alt="Quotation mark"
                className="mb-6"
                width={30}
                height={24}
              />
              <blockquote className="text-xl font-bold">
                {feedback.quote}
              </blockquote>
            </div>
            <div className="pl-7 flex gap-5 items-center">
              <div>
                <Image
                  src={feedback.customer.image.src}
                  alt={`customer ${i + 1}`}
                  className="rounded-full aspect-square object-cover"
                  width={feedback.customer.image.width}
                />
              </div>
              <div>
                <cite className="text-lg font-semibold not-italic">
                  {feedback.customer.name}
                </cite>
                <p className="text-sm font-semibold opacity-50">
                  {feedback.customer.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-7">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              // className={`mx-2 px-4 py-2 border border-gray-300 ${
              //   currentPage === page ? "bg-gray-300" : "bg-white"
              // }`}
              className={clsx(
                "w-4 h-4 rounded-full",
                currentPage === page ? "bg-primary" : "bg-dark1 opacity-20"
              )}
              onClick={() => handlePageChange(page)}
            />
          )
        )}
      </div>
    </section>
  );
};

export default FeedbackSection;
