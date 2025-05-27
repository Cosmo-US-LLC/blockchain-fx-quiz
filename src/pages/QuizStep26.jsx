import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import step_26_1 from "../assets/step_26/step_26 (1).png";
import step_26_2 from "../assets/step_26/step_26 (2).png";
import step_26_3 from "../assets/step_26/step_26 (3).png";
import step_26_4 from "../assets/step_26/step_26 (4).png";
import CircularProgress from "../components/circular-progress";
import { setI18n } from "react-i18next";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/quiz/fact-check-no=7_2");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="quiz-container min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={26} totalSteps={28} />

      <div className="mt-[2rem] w-[100%] max-w-[1240px] mx-auto ">
        <div className="flex-col items-center justify-center bg-[#12121200] p-4">
          <CircularProgress
            percentage={100}
            size={162}
            strokeWidth={16}
            backgroundColor="#353535"
            progressColor="#D99A26"
            textColor="#FFFFFF"
            label="Your crypto profile is loading "
          />
        </div>
        <div className="max-w-[1240px] mx-auto  w-full ">
          <h1 className="text-[40px] text-center text-[#fff] font-bold mb-4 ">
            Analysing your results
          </h1>
          <p className="text-[16px]  text-center font-[400] text-[#fff] mb-6 ">
            {" "}
            3insiders is your unfair advantage in crypto, giving you direct
            insider access, early entry <br /> into private communities, and
            insights from a full-time expert research team.
          </p>
          <div className="flex justify-between space-x-4 itens-center">
            <div>
              <img src={step_26_1} alt="" />
            </div>
            <div>
              <img src={step_26_2} alt="" />
            </div>
            <div>
              <img src={step_26_3} alt="" />
            </div>
            <div>
              <img src={step_26_4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStep26;
