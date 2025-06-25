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

const Results = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  const [showPopup, setShowPopup] = useState(false);
  const textRef = useRef(null);

  const handleCopy = async () => {
    try {
      const textToCopy = textRef.current?.textContent || "";
      await navigator.clipboard.writeText(textToCopy);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRoute = () => {
    window.location.href =
      "https://blockchainfx.com";
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
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <div
        className="flex flex-col items-center min-h-screen px-4 pb-4 overflow-hidden quiz-container"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <QuizHeader currentStep={"Bonus"} totalSteps={28} />
        <QuizSteps currentStep={28} totalSteps={28} />
        <div className="mb-4 !mt-[-22px] bg-[#D99A2633] w-[100%] flex justify-center items-center rounded-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M11 2.20099C8.66636 2.20099 6.4283 3.12803 4.77816 4.77816C3.12803 6.4283 2.20099 8.66636 2.20099 11C2.20099 13.3336 3.12803 15.5717 4.77816 17.2218C6.4283 18.872 8.66636 19.799 11 19.799C13.3336 19.799 15.5717 18.872 17.2218 17.2218C18.872 15.5717 19.799 13.3336 19.799 11C19.799 8.66636 18.872 6.4283 17.2218 4.77816C15.5717 3.12803 13.3336 2.20099 11 2.20099ZM0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11ZM11 4.40033C11.6072 4.40033 12.1005 4.89201 12.1005 5.50082V10.5446L15.0769 13.5227C15.1879 13.6227 15.2774 13.7442 15.3399 13.8798C15.4024 14.0155 15.4366 14.1624 15.4405 14.3117C15.4444 14.461 15.4178 14.6095 15.3625 14.7482C15.3071 14.8869 15.2241 15.0129 15.1185 15.1185C15.0129 15.2241 14.8869 15.3071 14.7482 15.3625C14.6095 15.4178 14.461 15.4444 14.3117 15.4405C14.1624 15.4366 14.0155 15.4024 13.8798 15.3399C13.7442 15.2774 13.6227 15.1879 13.5227 15.0769L10.2229 11.7771C10.0164 11.5712 9.90007 11.2917 9.89951 11V5.50082C9.89951 4.89201 10.3928 4.40033 11 4.40033Z"
              fill="white"
            />
          </svg>
          <h3 className=" pl-2 text-white font-[500] text-[25px] py-[5px] ">
            35% Your Special Bonus expires in
            <span className="font-[700] text-[#D99A26] text-Manrope ">
              {" "}
              {formatTime(timeLeft)} min
            </span>
          </h3>
        </div>
        <div className="mt-[2rem] w-[100%] max-w-[1240px] mx-auto">
          <div className="max-w-[1020px] mx-auto  w-full ">
            <h1 className="text-[40px] text-center text-[#fff] font-bold mb-4 ">
              Congratulations! 🎉 <br />
              You’ve sucessfully passed the Quiz
            </h1>
            <p className="text-[20px]  text-center font-[700] text-[#fff] mb-[53px] ">
              You’ve completed the challenge and unlocked this special offer.
              <br />
              Here’s your limited one-time bonus code to buy $BFX
            </p>
            <div className="max-w-[618px] pt-6 pb-[1px] mx-auto bg-[#131313]">
              {/* <div className="flex items-center max-w-[506px] mx-auto mb-[25px]">
                <p className="w-[50%] text-[16px] flex justify-start  font-[400] text-[#fff] ">
                  Your readiness:{" "}
                  <span className="font-[700] text-[#D99A26] "> 87%</span>
                </p>
              </div> */}
              <div className="flex justify-evenly pl-6 pt-3 items-center max-w-[506px] mx-auto w-[100%] bg-[#353535] mb-4">
                <div className="relative z-[9]">
                  <h2 className="text-white font-[500] text-[24px] mb-4">
                    Claim your personal <br />
                    <span className="font-[700] text-[#D99A26] ">35%</span> BFX
                    Bonus Code
                  </h2>
                  <div className="flex relative justify-around items-center border border-[#fff] rounded-[8px] px-2">
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
                    {showPopup && (
                      <div className="fixed bottom-[8%] z-[99] shadow left-1/2 transform -translate-x-1/2 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="bg-[#353535] text-white px-4 py-4 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                                fill="#F9CC3E"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">
                            Copied Successfully
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[30%] relative min-h-[225px]">
                  <img
                    src={result}
                    className="min-w-[290px] min-h-[225px] absolute top-[0%] right-[-50%] z-[1]"
                    alt=""
                  />
                </div>
              </div>
              {/* <div className="max-w-[506px] mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <img src={result_icon_3} className="h-[132px]" alt="" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="max-w-[578.2px] mx-auto mt-6 mb-3">
            <button
              onClick={handleRoute}
              style={{
                borderRadius: "10px",
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className={`py-[13px] w-[100%] text-[#000] text-[25px] font-[700] hover:opacity-80 transition transform active:scale-95`}
            >
              CLAIM YOUR BONUS NOW
            </button>
          </div>
          <div>
            <p className="text-[16px] font-[400] text-[#fff] text-center">The button will redirect you to BlockchainFX.com</p>
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
          className="absolute top-0 left-0 z-10 w-full h-full bg-transparent appearance-none cursor-pointer"
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
          className="absolute w-5 h-5 -translate-y-1/2 bg-yellow-500 border-2 border-white rounded-full shadow-md pointer-events-none top-1/2"
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
