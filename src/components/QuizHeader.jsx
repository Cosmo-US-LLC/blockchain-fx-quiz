import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/header/logo.png";

const QuizHeader = ({ currentStep, totalSteps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFact = location.pathname === "/quiz/fact-check";
  const isFactStep7 = location.pathname === "/quiz/fact-check-2";
  
  const getPrevStepUrl = () => {
    navigate(-1);
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center mb-4">
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

        <div className="flex items-center">
          <img src={Logo} className="h-[100%] w-[100%] bg-cover" alt="" />
        </div>

        <div className="text-white">
          {currentStep}
          {!isFact && !isFactStep7 &&`/${totalSteps}`}
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
