import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import step_26 from "../assets/step_26/step_26.png";
import CircularProgress from "../components/circular-progress";
import { setI18n } from "react-i18next";

const QuizStep27 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/quiz/step=19_28");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Loading"} totalSteps={""} />
      <QuizSteps currentStep={22} totalSteps={28} />

      <div className=" w-[100%] max-w-[1240px] mx-auto ">
        <div className="flex-col items-center justify-center bg-[#12121200] p-1">
          <CircularProgress
            percentage={100}
            size={162}
            strokeWidth={16}
            backgroundColor="#353535"
            progressColor="#D99A26"
            textColor="#FFFFFF"
            label="Your crypto profile is loading"
          />
        </div>
        <div className="max-w-[1020px] mx-auto  w-full ">
          <h1 className="text-[40px] text-center text-[#fff] font-bold mb-4 ">
            Analysing your profile
          </h1>
          <p className="text-[16px]  text-center font-[400] text-[#fff] mb-6 ">
            BlockchainFX has attracted over $2.2 million and welcomed more than
            1,500 users <br /> to become a part of its next generation crypto
            exchange, all within the past 4 weeks.
          </p>
          <div>
            <div className="bg-[#4B4B4B] space-y-[5px] mx-auto rounded-[4px] px-8 mt-6 pt-5 pb-3 max-w-[458px] w-[100%]">
              <div>
                <img src={step_26} alt="" />
              </div>
              <div className="flex justify-between">
                <p className="text-[#fff] font-[400] leading-[160%]">
                  Like buying into Binance at day one
                </p>
              </div>
              <div>
                <p className="text-[#fff] font-[400] leading-[160%]">
                  Imagine getting into Coinbase, or Binance at day one, that’s
                  exactly what BFX is offering right now in its presale.
                </p>
                <p
                  style={{ color: "rgba(255, 255, 255, 0.50)" }}
                  className="mt-3 text-[16px] font-[400]"
                >
                  ‐ Clay (Crypto Youtuber, 110K Followers){" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStep27;
