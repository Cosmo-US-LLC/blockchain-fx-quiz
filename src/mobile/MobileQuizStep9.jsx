import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_9 from "../assets/step_9/step_9.png";

const MobileQuizStep9 = () => {
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
    navigate("/quiz/step=8");
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
        <QuizHeader currentStep={"Facts"} totalSteps={28} />
        <QuizSteps currentStep={9} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto w-[100%]">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-center leading-[120%] text-[#fff] font-bold !mb-4 ">
       Your cash is losing  <br /> value every year
          </h1>
          <p className="text-[16px] text-center font-[400] text-[#fff] mb-6 ">
        The average global inflation rate is 6% to 8% per year. This means cash can lose up to 50% of its value in just 9 to 10 years. In the U.S., for example, $100 in 2013 is worth about $65 in 2025. That’s why experts suggest diversifying your income to protect your wealth.
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
          <div className="bg-[#252525] max-w-[300px] mx-auto mt-6 h-[300px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_9}
              className="max-h-[460px]"
              alt=""
            />
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default MobileQuizStep9;
