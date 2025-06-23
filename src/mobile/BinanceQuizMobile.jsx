import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import MobileFeatureSec from "../components/IsidersOneApp/mobile/MobileFeatureSec";

const BinanceQuizMobile = () => {
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
    <div className="flex flex-col relative items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"About BFX"} totalSteps={28} />
      <QuizSteps currentStep={25} totalSteps={28} />

      <div className="flex flex-col gap-4 items-center   mx-auto justify-between w-[100%]">
        <div className="flex flex-col w-full gap-2 ">
          <p className="text-[20px] w-full text-center font-[600] leading-[36px] tracking-[-1px] text-[#fff]">
            Learn more about BlockchainFX
          </p>
          <h2 className="text-[30px] w-full leading-[130%] text-center font-[700]   text-[#fff]">
            Binance + Robinhood <br /> in One App?
          </h2>
          <p className="text-[16px] w-full text-center font-[400] leading-[28px] text-[#fff]">
            Discover how BlockchainFX is transforming crypto by connecting it to
            global finance and unlocking access to over 500+ assets.
          </p>
        </div>
        <div className="flex justify-center w-[100%] ">
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/w8ynmofaw4.js"
            async
            type="module"
          ></script>
          <style>
            {`
              wistia-player[media-id='w8ynmofaw4']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/w8ynmofaw4/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
              }
            `}
          </style>
          <div className="w-full max-w-[730px]  mx-auto ">
            <wistia-player
              media-id="w8ynmofaw4"
              aspect="1.7777777777777777"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                borderRadius: "8px",
              }}
            ></wistia-player>
          </div>
        </div>
        <div className="w-[100%]">
          <MobileFeatureSec/>
        </div>
    
      </div>
       <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] w-[100%] text-[16px] text-[#000] mt-4 font-[700] uppercase hover:opacity-80 transition transform active:scale-95`}
          >
            Unlock your Special Bonus (2/3)
          </button>

    </div>
  );
};

export default BinanceQuizMobile;
