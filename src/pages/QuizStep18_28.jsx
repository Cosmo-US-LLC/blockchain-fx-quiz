import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_21_1 from "../assets/Step18_28/step18_28_1.png";
import Step_21_2 from "../assets/Step18_28/step18_28_2.png";
import Step_21_3 from "../assets/Step18_28/step18_28_3.png";
import Step_21_4 from "../assets/Step18_28/step18_28_4.png";
import Step_21_5 from "../assets/Step18_28/step18_28_5.png";
import Step_21_6 from "../assets/Step18_28/step18_28_6.png";
import CheckIcon from "../components/CheckIcon";

const QuizStep18_28 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {
      title: "Buy a House",
      img: Step_21_1,
    },
    {
      title: "A perfect wedding",
      img: Step_21_2,
    },
    {
      title: "Vacation",
      img: Step_21_3,
    },
    {
      title: "Buy a car",
      img: Step_21_4,
    },
    {
      title: "Worry free retirement",
      img: Step_21_5,
    },
    {
      title: "Other",
      img: Step_21_6,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

// const handleNext = (option) => {
//   localStorage.setItem("specialWish", option.title);
//   navigate("/quiz/fact-check-no=7_2");
// };

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("specialWish", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-no=7_2");
    }, 200);
  };



  return (
    <div
      className="flex flex-col items-center min-h-screen p-4 quiz-container"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <QuizHeader currentStep={18} totalSteps={18} />
      <QuizSteps currentStep={21} totalSteps={28} />

      <div className="max-w-[1050px] w-full text-center mt-12">
        <h1 className="text-[30px] font-[700] leading-[120%] mb-1  text-center">
          Is there something special <br /> you wish to achive?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 my-8">
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

export default QuizStep18_28;
