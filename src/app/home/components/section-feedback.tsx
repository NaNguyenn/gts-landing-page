import React from "react";
import { feedbacksData } from "../placeholder-data";
import Image from "next/image";

const FeedbackSection = () => {
  return (
    <section>
      <div>
        <h2>Phản hồi từ khách hàng</h2>
        <div>
          {feedbacksData.map((feedback, i) => (
            <div key={i}>
              <Image
                src="/icons/quotation-mark.svg"
                alt="Quotation mark"
                className="dark:invert"
                width={30}
                height={24}
              />
              <blockquote>{feedback.quote}</blockquote>
              <div>
                <div>
                  <Image
                    src={feedback.customer.image.src}
                    alt={`customer ${i + 1}`}
                    className="dark:invert"
                    width={feedback.customer.image.width}
                    height={feedback.customer.image.height}
                  />
                </div>
                <div>
                  <cite>{feedback.customer.name}</cite>
                  <p>{feedback.customer.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
