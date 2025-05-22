import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import step_26 from "../assets/step_26/step_26.png";
import CircularProgress from "../components/circular-progress";

const QuizStep26 = () => {
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
   
    navigate("/quiz/fact-check-no=6");
  };

 
  return (
    <div className="quiz-container max-w-[1240px] mx-auto min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={26} totalSteps={28} />

      <div className="mt-[2rem] w-[100%]">

         <div className="flex-col items-center justify-center bg-[#12121200] p-4">
      <CircularProgress
        percentage={29}
        size={162}
        strokeWidth={16}
        backgroundColor="#353535"
        progressColor="#D99A26"
        textColor="#FFFFFF"
        label="Your results are loading"
      />

    </div>
        <div className="max-w-[1020px] mx-auto  w-full ">
          <h1 className="text-[40px] text-center text-[#fff] font-bold mb-4 ">
     $1.8 Million Raised In 4 Weeks
          </h1>
          <p className="text-[16px]  text-center font-[400] text-[#fff] mb-6 ">BlockchainFX has attracted over $1.8 million and welcomed more than 1,000 users <br /> to become a part of its next generation  crypto exchange, all within the past 4 weeks.
          </p>
          <div>
            <div className="bg-[#4B4B4B] space-y-[5px] mx-auto rounded-[4px] p-8 mt-8 max-w-[458px] w-[100%]">
                <div>
                    <img src={step_26} alt="" />
                </div>
                <div className="flex justify-between">
                    <p className="text-[#fff] font-[400] leading-[160%]">Grate for Trading....</p>
                    <p 
                    style={{
                        color:"rgba(255, 255, 255, 0.50)",
                    }}
                    className="text-[16px] font-[400] leading-[160%]">Mikel</p>
                </div>
                <div>
                    <p className="text-[#fff] font-[400] leading-[160%]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default QuizStep26;
