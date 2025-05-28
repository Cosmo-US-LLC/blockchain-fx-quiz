import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import result from "../assets/result/result.png";
import result_icon_1 from "../assets/result/result_icons (1).png";
import result_icon_2 from "../assets/result/result_icons (2).png";
import result_icon_3 from "../assets/result/result_icons (3).png";
import result_icon_4 from "../assets/result/result_icons (4).png";
import result_icon_5 from "../assets/result/result_icon.png";
import copy_icon from "../assets/result/copy.png";
import { toast, ToastContainer } from 'react-toastify';


const Results = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
const [timeLeft, setTimeLeft] = useState(45 * 60);

  const textRef = useRef(null);

  const handleCopy = () => {
  const text = textRef.current.innerText;
  navigator.clipboard.writeText(text).then(() => {
    toast("Copied!");
  }).catch((err) => {
    toast.error("Failed to copy text");
    console.error("Copy failed", err);
  });
};

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  const handleRoute = () => {
    window.location.href = "https://presale.blockchainfx.com/?utm_source=quiz+page&utm_medium=landing&utm_campaign=Blockchain+FX+marketing";
  };



   useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="quiz-container   min-h-screen overflow-hidden flex flex-col items-center p-4"
      style={{
                 backgroundColor:"#000000"
                
              }}
      >
        <QuizHeader currentStep={""} totalSteps={28} />
        <QuizSteps currentStep={28} totalSteps={28} />
        <div className="mb-4 !mt-[-22px] bg-[#D99A2633] w-[100%] flex justify-center items-center rounded-[8px]">
          <img src={result_icon_4} alt="results" 
           
            className=" px-[10px] text-white" />
          <h3 className=" text-white font-[500] text-[16px] py-[5px] ">

            35% Bonus expires in
            <span className="font-[700] text-[#D99A26] text-Manrope ">
              {" "} {formatTime(timeLeft)} min
            </span>
          </h3>
        </div>
        <div className="mt-[2rem] w-[100%] max-w-[1240px] mx-auto">

          <div className="max-w-[1020px] mx-auto  w-full ">
            <h1 className="text-[40px] text-center text-[#fff] font-bold mb-4 ">
              Congratulations! 🎉 <br />You’ve sucessfully passed the Quiz
            </h1>
            <p className="text-[20px]  text-center font-[700] text-[#fff] mb-[53px] ">
              You’ve completed the challenge and unlocked this special offer.<br />Here’s your limited one-time bonus code to buy $BFX
            </p>
            <div className="flex items-center max-w-[578.2px] mx-auto mb-[25px]">
              <p className="w-[50%] text-[16px] flex justify-start  font-[400] text-[#fff] ">
                Your readiness: <span className="font-[700] text-[#D99A26] ">{" "}84%</span>
              </p>

            </div>
            <div className="flex justify-evenly items-center max-w-[578.2px] mx-auto w-[100%] bg-[#353535] mb-4">
              <div>
                <h2 className="text-white font-[500] text-[24px] mb-4">
                  Claim your personal <br /><span className="font-[700] text-[#D99A26] ">35%</span> BFX Bonus Code
                </h2>
                <div className="flex justify-around items-center border border-[#fff] rounded-[8px] px-2">
                  <button
                    ref={textRef}
                    className="h-[40px] px-2 text-white"
                    type="button"
                  >
                    upw8U2kbKCKzSZi
                  </button>
                  <img
                    onClick={handleCopy}
                    src={copy_icon}
                    alt="copy"
                    width={14}
                    height={16}
                    className="cursor-pointer"
                  />
                  <ToastContainer position="top-right" />
                </div>
              </div>
              <img src={result} className="min-w-[290px] min-h-[225px]" alt="" />
            </div>
          </div>
          <div className="max-w-[578.2px] mx-auto my-6">

            <p className="text-[16px] text-[#fff] font-[400] leading-[250%] text-center mb-4">*At 3insiders, our goal is to match you with the right project for your goals and secure exclusive deals you won’t find anywhere else through our industry connections. A win for everyone. </p>
            <div className="flex justify-center items-center mb-6">
              <img src={result_icon_3} className="h-[132px]" alt="" />
            </div>
           

               <button
            onClick={handleRoute}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] w-[100%] text-[#000] font-[700]`}
          >
           Visit Now: BlockchainFX.com
          </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Results;

function GradientRangeSlider({ value, onChange, gradientColors, label }) {
  // Handle the range input change
  const handleChange = (e) => {
    onChange(Number.parseInt(e.target.value));
  };

  return (
    <div className="mb-2">
      <div className="relative">
        {/* Custom range track with gradient */}
        <div
          className={`absolute top-1/2 left-0 -translate-y-1/2 h-3 w-full rounded-full bg-gradient-to-r ${gradientColors}`}
        ></div>

        {/* Actual range input (invisible but functional) */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="appearance-none bg-transparent absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
          style={{
            // Hide the default appearance but keep functionality
            WebkitAppearance: "none",
            // Custom thumb styling
            "--thumb-size": "20px",
            "--thumb-color": "#f59e0b00",
            "--thumb-border": "2px solid f59e0b00",
          }}
        />

        {/* Custom thumb/handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-white bg-yellow-500 shadow-md pointer-events-none"
          style={{
            left: `calc(${value}% - 10px)`,
          }}
        ></div>
      </div>

      {/* Label */}
      <div className="p-2">
        <span className="text-gray-400 text-sm bg-gray-800/80 px-2 py-0.5 rounded">
          {label}
        </span>
      </div>
    </div>
  );
}
