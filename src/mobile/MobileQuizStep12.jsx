import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_12 from "../assets/step_12/step_12.png";

const MobileQuizStep12 = () => {
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
    navigate("/quiz/step=10");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={""} />
      <QuizSteps currentStep={12} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto  w-[100%]">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-center leading-[120%] text-[#fff] font-bold mb-4 ">
            How millionaires build <br /> generational wealth
          </h1>
          <p className="text-[16px] max-w-[380px] text-center mx-auto font-[400] text-[#fff] mb-6 ">
          Most millionaires don’t rely on just one income stream. According to CNBC, 65% have at least three different sources of income, while nearly a third have five or more. These can include business earnings, real estate, dividends, crypto, stocks, and other passive income sources.
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
          <div className="bg-[#252525] mx-auto relative max-w-[300px] !mt-[40px] h-[300px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_12}
              className="max-h-[320px] mt-[-20px]"
              alt=""
            />
        </div>
       
      </div>
    </div>
  );
};

export default MobileQuizStep12;
