import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_4_1 from "../assets/step_4/step_4 (1).png";
import Step_4_2 from "../assets/step_4/step_4 (2).png";
import Step_4_3 from "../assets/step_4/step_4 (3).png";
import Step_4_4 from "../assets/step_4/step_4 (4).png";

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

const QuizStep4 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {
      title: "Daily",
      img: Step_4_1,
    },
    {
      title: "Rarely",
      img: Step_4_2,
    },
    {
      title: "Few times a week",
      img: Step_4_3,
    },
    {
      title: "I haven’t started investing yet, but I want to",
      img: Step_4_4,
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    setTimeout(() => {
      navigate("/quiz/step=5");
    }, 200);
  };

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center px-4">
      <QuizHeader currentStep={4} totalSteps={18} />
      <QuizSteps currentStep={4} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[30px] font-[700] leading-[120%] mb-1  text-center">
          How often do you check <br /> crypto prices or make trades?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              style={{
                background: "rgba(245, 245, 245, 0.15)",
              }}
              className={` relative py-4 px-6 flex items-center transition-all duration-150 ease-in-out justify-between rounded-[8px] cursor-pointer ${
                selectedOption === option.title
                  ? "border border-[#fcd24b] bg-[#121212] opacity-100 scale-100"
                  : "bg-[#EDEDED] border border-[#0000]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.img} className="h-[40px]" alt="" />
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

export default QuizStep4;
