import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_7 from "../assets/step_7/step_7.png";

const MobileQuizStep7 = () => {
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
    navigate("/quiz/step=7");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={7} totalSteps={28} />

      <div className="flex flex-col w-[100%] px-4 py-6 gap-6">
        <div className="flex flex-col w-full gap-4 text-center">
          <h1 className="text-[28px] text-[#fff] text-center font-bold leading-[130%]">
            We’ve all missed some major opportunities in crypto
          </h1>
          <p className="text-[16px] font-[400] text-center text-[#fff]">
            The earlier you get in, the cheaper the price. That means less risk
            and more growth potential. Bitcoin was once worth less than $1.{" "}
            <br />
            <br /> Many of today’s most successful crypto projects like
            Ethereum, Solana, and BNB started with a presale. That’s where early
            supporters saw the biggest gains.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] w-[100%] text-[#17181D] text-[16px] leading-[24px] font-[700] uppercase`}
          >
            Continue
          </button>
        </div>
        <div className="bg-[#252525] mx-auto w-[100%]  max-h-[280px] mt-4 flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img src={Step_7} className="object-contain w-full max-w-[320px] max-h-[350px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep7;
