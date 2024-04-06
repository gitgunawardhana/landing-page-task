import React, { useState } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      expanded: false,
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      expanded: false,
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      expanded: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].expanded = !updatedFaqs[index].expanded;
    setFaqs(updatedFaqs);
  };

  return (
    <div className="sm:px-14 px-6 py-16 mb-5">
      <h1 className="font-semibold text-center text-[27px] text-primary">
        Frequently asked questions
      </h1>
      <div>
        <ul className="mt-8">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-[#FAF8FF] px-5 py-8 rounded-lg mb-4">
              <button
                className={`relative flex gap-2 items-center w-full text-[22px] text-left md:text-lg  ${
                  faq.expanded && "text-primary leading-[28px] font-medium"
                }`}
                aria-expanded={faq.expanded}
                onClick={() => toggleFAQ(index)}
              >
                <span className={`flex-1 font-medium text-[22px]`}>
                  {faq.question}
                </span>
                {faq.expanded ? "-" : "+"}
              </button>
              <div
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                style={{ maxHeight: faq.expanded ? "1000px" : "0" }}
              >
                <div className="pb-5 leading-relaxed">
                  <p className="space-y-2 leading-[30px] text-[#6F6C90] text-[18px] mt-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
