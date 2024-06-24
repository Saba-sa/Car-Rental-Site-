import FAQData from "../../data/Faqdata";
const Faq = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] my-8 ">
        <div className="flex flex-col items-center" data-aos="fade-down">
          <h2 className="font-bold text-5xl mt-5  text-primary">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3 dark:text-white">
            Frequenty asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 md:w-[60%] mx-auto mt-8 ">
          {FAQData.map((i) => {
            const { id, question, answer } = i;
            return (
              <div
                className="py-5"
                key={id}
                data-aos="fade-down"
                data-aos-delay={1000}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> {question}</span>
                    <span className="transition ">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 dark:text-white">
                    {answer}
                  </p>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
