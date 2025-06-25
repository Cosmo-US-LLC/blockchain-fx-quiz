import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_16 from "../assets/step_16/step_16.png";

const MobileQuizStep16 = () => {
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
    navigate("/quiz/step=13");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={16} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto w-[100%]">
        <div className=" space-y-[15px] w-full ">
          <h1 className="text-[28px] text-center leading-[120%] text-[#fff] font-bold mb-4 ">
            It has never been easier to earn real passive income with crypto
          </h1>
          <p className="text-[16px] font-[400] text-center  text-[#fff] mb-6 ">
     BlockchainFX makes it possible.Those who buy the new $BFX token during the presale earn rewards every time someone trades on the platform. As $BFX holders, they receive a share of all trading fees in USDT without  having to trade themselves.
          </p>
        </div>
        <div className="flex justify-center mt-12">
             <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px]  w-[100%] text-[#000] font-[700] uppercase`}
          >
            Continue
          </button>
         </div>
          <div className="bg-[#252525] mt-8  w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_16}
              className=" object-cover "
              alt=""
            />
        </div>
          
      </div>
    </div>
  );
};

export default MobileQuizStep16;
