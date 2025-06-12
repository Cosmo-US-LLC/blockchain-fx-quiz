import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import AgeOption from "../components/AgeOption";
import Loading from "../components/Loading";
import peopleimg from "../assets/Peoplehave/people_img.webp";

const MobileQuizStep1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigate("/quiz/step=2");
  };

  return (
    <div className="relative min-h-screen">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={2} totalSteps={28} />
      <div className="flex flex-col items-center h-full gap-6 px-4 pt-6">
        <h1 className="text-[28px] font-[700] leading-[120%] text-center text-[#fff]  capitalize">
          The 2025 Crypto Bull <br /> Market Has Just Started
        </h1>
        <p className="text-[16px] text-center font-[400] leading-[24px] text-[#fff] ">
          In May 2025, Bitcoin reached a new all-time high of $112,000, marking
          the start of a new bull market cycle. With global financial markets
          stabilizing, crypto is once again leading the way, outpacing
          traditional assets and capturing the attention of millions.
        </p>
        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4 mb-4"> */}
        <div className="flex justify-center w-full ">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] px-4 w-[100%] text-[16px] text-[#17181D] font-[700] leading-[24px] uppercase`}
          >
            Continue
          </button>
        </div>

        <div className="w-[100%] animate-fade-in-up">
          <img src={peopleimg} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep1;
