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

 

  // Simulate loading
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
    <div className="px-4 pt-4 min-h-screen max-h-screen flex justify-between flex-col">
      <div className="w-[100%]">
         <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={2} totalSteps={28} />
    <div className="quiz-container max-w-[1240px] mx-auto overflow-hidden flex flex-col items-center">
      <div className="w-[100%]">
        <div className="w-full  mt-[1rem]">
          <h1 className="text-[28px] text-center text-[#fff] font-bold mb-1">
           The 2025 crypto bull <br /> market has just started
          </h1>
          <p className="text-[16px] text-center font-[400] text-[#fff] mb-6 ">
        Bitcoin recently broke past its all time high of $112,000, marking the start of a new bull run. Crypto is once again leading the charge, outperforming stocks, gold, and real estate, and capturing the attention of millions. Now is your chance to position yourself early. <br /><br /> Tap continue to see how much you could earn.
          </p>
         <div className="flex justify-center ">
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
        </div>
      </div>
    </div>
      </div>
        <div className=" w-[100%] ">
            <img
              src={peopleimg}
              className=""
              alt=""
            />
        </div>
    </div>
  );
};

export default MobileQuizStep1;
