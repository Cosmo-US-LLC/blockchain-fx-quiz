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
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={7} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto w-[100%]">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-[#fff] text-center font-bold mb-4  leading-[120%]">
            We’ve all missed some major opportunities in crypto
          </h1>
          <p className="text-[16px] font-[400] text-center text-[#fff] mb-6 ">
            The earlier you get in, the cheaper the price. That means less risk
            and more growth potential. Bitcoin was once worth less than $1.{" "}
            <br />
            <br /> Many of today’s most successful crypto projects like
            Ethereum, Solana, and BNB started with a presale. That’s where early
            supporters saw the biggest gains.
          </p>
        
        </div>
        <div className="flex justify-center mt-12">
             <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] w-[100%] text-[#000] font-[700] uppercase`}
          >
            Continue
          </button>
         </div>
          <div className="bg-[#252525] mt-[2rem] max-w-[300px] mx-auto h-[300px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_7}
              className="max-h-[360px]"
              alt=""
            />
        </div>
         
      </div>
    </div>
  );
};

export default MobileQuizStep7;
