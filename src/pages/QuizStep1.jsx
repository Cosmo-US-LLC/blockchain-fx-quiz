import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import AgeOption from "../components/AgeOption";
import Loading from "../components/Loading";
import peopleimg from "../assets/Peoplehave/people_img.webp";

const QuizStep1 = () => {
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
    <div className="px-4 max-h-[100vh] min-h-[100vh]">
       <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={2} totalSteps={28} />
    <div className="quiz-container max-w-[1240px] mx-auto  overflow-hidden flex flex-col items-center p-4">
     

      <div className="flex items-center justify-between w-[100%]">
        <div className=" flex flex-col  items-center  max-w-[600px] w-full  mt-[6rem]">
          <h1 className="text-[30px] text-center text-[#fff] font-bold mb-8 ">
           The 2025 crypto bull <br /> market  has just started
          </h1>
          <p className="text-[16px] font-[400] text-[#fff] max-w-[433px] mx-auto mb-6 text-center ">
         Bitcoin recently broke past its all time high of $112,000, marking the start of a new bull run. Crypto is once again leading the charge, outperforming stocks, gold, and real estate, and capturing the attention of millions. Now is your chance to position yourself early. <br /> <br />Tap continue to see how much you could earn.
          </p>
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] max-w-[307px] hover:opacity-80 w-[100%] text-[#000] font-[700] uppercase transition transform active:scale-95 `}
          >
            Continue
          </button>
        </div>
          <div className=" w-[100%]">
          <img
            src={peopleimg}
            className="absolute max-w-[550px] bottom-[0%] right-[0%]"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuizStep1;
