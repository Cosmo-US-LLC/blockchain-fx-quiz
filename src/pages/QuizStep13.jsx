import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuizStep13 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {
      title: "Less than $10,000",
    },
    {
      title: "$10,000 - $20,000",
    },
    {
      title: "$20,000 - $50,000",
    },
    {
      title: "$50,000 - $100,000",
    },
    {
      title: "$100,000 - $250,000",
    },
    {
      title: "$500,000 - $1,000,000",
    },
    {
      title: "$250,000 - $500,000",
    },
    {
      title: "More than $1,000,000",
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // const handleNext = () => {
  //   navigate("/quiz/step=11")
  // }
  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("goalIncome", option.title);
    setTimeout(() => {
      navigate("/quiz/step=11");
    }, 200);
  };

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={10} totalSteps={18} />
      <QuizSteps currentStep={13} totalSteps={28} />

      <div className="max-w-[1000px] w-full text-center mt-6">
        <h1 className="text-[30px] font-[700] leading-[120%] mb-1  text-center">
          What monthly income do you want to achieve?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              style={{
                background: "rgba(245, 245, 245, 0.15)",
              }}
              className={` relative py-6 px-6 flex items-center transition-all duration-150 ease-in-out justify-between rounded-[8px] cursor-pointer ${
                selectedOption === option.title
                  ? "border border-[#fcd24b] bg-[#121212] opacity-100 scale-100"
                  : "bg-[#EDEDED] border border-[#0000]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <p className="w-[88%] text-white text-start font-medium">
                {option.title}
              </p>
              <div
                className={`bg-[#fcd24b] absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-1.5 flex items-center justify-center
  transition-all duration-150 ease-in-out
  ${
    selectedOption === option.title
      ? "opacity-100 scale-100"
      : "opacity-0 scale-0"
  }
`}
              >
                <CheckIcon className="w-4 h-4 text-[#000]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep13;
