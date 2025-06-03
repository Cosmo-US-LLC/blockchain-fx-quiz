import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/header/logo.png";

const QuizHeader = ({ currentStep, totalSteps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFact = location.pathname === "/quiz/fact-check";
  const isFactStep7 = location.pathname === "/quiz/fact-check-2";
  const isFactcheck3 = location.pathname === "/quiz/fact-check-3";
  const isFactno3 = location.pathname === "/quiz/fact-check-no=3";
  const isFactno4 = location.pathname === "/quiz/fact-check-no=4";
  const isFactno5 = location.pathname === "/quiz/fact-check-no=5";
  const isFactno6 = location.pathname === "/quiz/fact-check-no=6";
  const isFactno7 = location.pathname === "/quiz/fact-check-no=7";
  const isFactno8 = location.pathname === "/quiz/fact-check-no=7_2";
    const isFactno9 = location.pathname === "/quiz/step=18";
    const isFactno10 = location.pathname === "/quiz/step=19_28";

  const isResults= location.pathname === "/quiz/results";
  const isHome= location.pathname === "/";
  const isStep1= location.pathname === "/quiz/step=1";

  const getPrevStepUrl = () => {
    navigate(-1);
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center mb-4">
        {!isHome && !isStep1 &&
        <button
          onClick={getPrevStepUrl}
          className="text-white bg-[#444444] rounded-[12px] py-2 px-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        }

        <div className="flex justify-center w-[100%] items-center">
          <img src={Logo} className=" bg-cover" alt="" />
        </div>

        <div className="text-white">
     
          {currentStep}
          {!isFact && !isStep1 && !isFactStep7 && !isResults && !isFactcheck3 && !isFactno3 && !isFactno4 && !isFactno5 && !isFactno6 && !isFactno7 && !isFactno8 && !isFactno9 && !isFactno10 &&`/${totalSteps}`}
        
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
