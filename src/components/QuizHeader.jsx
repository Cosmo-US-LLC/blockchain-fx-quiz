import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/header/logo2x.svg";

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
  const isTopPick = location.pathname === "/quiz/best-crypto-project";

  const isResults = location.pathname === "/quiz/results";
  const isHome = location.pathname === "/";
  const isStep1 = location.pathname === "/quiz/step=1";

  const getPrevStepUrl = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full h-[60px] items-center justify-between">
      <div className="w-[10%] max-sm:w-[33%] ">
        {!isHome && !isStep1 && (
          <button
            onClick={getPrevStepUrl}
            className="text-white bg-[#444444] rounded-[5px] py-[6px] px-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
        )}
      </div>
      <div className="flex items-center justify-center w-[80%] max-sm:w-[34%]">
        <img src={Logo} className="h-auto bg-cover " alt="" />
      </div>

      <div className="w-[10%] max-sm:w-[33%] mb-1  text-[#fff] text-end leading-[26px] font-[400] tracking-[0.04em] text-[16px]">
        {/* {currentStep}
          {!isFact &&
            !isStep1 &&
            !isFactStep7 &&
            !isResults &&
            !isFactcheck3 &&
            !isFactno3 &&
            !isFactno4 &&
            !isFactno5 &&
            !isFactno6 &&
            !isFactno7 &&
            !isFactno8 &&
            !isFactno9 &&
            !isFactno10 &&
            `/${totalSteps}`} */}
        <span className="text-[#EAC05E]">{currentStep}</span>
        {!isFact &&
        !isTopPick &&
          !isFactStep7 &&
          !isResults &&
          !isFactcheck3 &&
          !isFactno3 &&
          !isFactno4 &&
          !isFactno5 &&
          !isFactno6 &&
          !isFactno7 &&
          !isFactno8 &&
          !isFactno9 &&
          !isFactno10 &&
          !isHome &&
          !isStep1 &&
          // !bestCrypto &&
          // !isFactno7_1 &&
          `/${totalSteps}`}
      </div>
    </div>
  );
};

export default QuizHeader;
