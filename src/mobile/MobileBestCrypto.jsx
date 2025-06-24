import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import madle from "../assets/BestCrypto/madle.svg";
import bfx from "../assets/BestCrypto/bfx.svg";
import bfx_img from "../assets/BestCrypto/bfx_img.webp";
import bfx_sv_1 from "../assets/BestCrypto/bfx_q (1).svg";
import bfx_sv_2 from "../assets/BestCrypto/bfx_q (2).svg";
import bfx_sv_3 from "../assets/BestCrypto/bfx_q (3).svg";
import bfx_sv_4 from "../assets/BestCrypto/bfx_q (4).svg";
import bfx_sv_5 from "../assets/BestCrypto/bfx_q (5).svg";
import bfx_sv_6 from "../assets/BestCrypto/bfx_q (6).svg";
import bfx_sv_7 from "../assets/BestCrypto/bfx_q (7).svg";
import bfx_sv_8 from "../assets/BestCrypto/bfx_q (8).svg";
import bfx_sv_9 from "../assets/BestCrypto/bfx_q (9).svg";
import bfx_sv_10 from "../assets/BestCrypto/Visa.svg";
import bfx_sv_11 from "../assets/BestCrypto/VisaCard.svg";

export const ProgressBar = ({
  title,
  progress,
  level,
  description,
  color = "bg-gradient-to-r from-yellow-400 to-orange-500",
  delay = 0,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const progressTimer = setTimeout(() => {
        setAnimatedProgress(progress);
      }, delay + 300);

      return () => {
        clearTimeout(progressTimer);
      };
    }
  }, [progress, delay, isVisible]);

  return (
    <div
      ref={progressRef}
      className="transition-all duration-1000 rounded-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <h3 className="text-[16px] font-[700] text-[#fff] mb-4">{title}</h3>

      <div className="relative mb-8">
        <div className="relative w-full h-4 overflow-hidden bg-gray-200 rounded-full">
          <div
            className={`h-4 rounded-full ${color} relative`}
            style={{
              width: `${animatedProgress}%`,
              transition: "width 3s ease-out",
            }}
          >
            <div className="absolute -right-1 -top-0 w-4 h-4 !bg-[#D99A26] rounded-full shadow-md"></div>
          </div>
        </div>

        <div
          className="absolute transition-all transform -translate-x-1/2 -bottom-8 duration-3000"
          style={{
            left: `${animatedProgress}%`,
            opacity: isVisible && animatedProgress > 0 ? 1 : 0,
            transition: "left 3s ease-out, opacity 1.2s ease-out",
          }}
        >
          <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded hover:bg-gray-700 whitespace-nowrap">
            {level}
          </span>

          <div className="absolute w-0 h-0 transform -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent left-1/2 -top-1 border-b-gray-600"></div>
        </div>
      </div>

      <p
        className="text-[#fff] text-[12px] font-[400] mt-2 leading-relaxed"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-out",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const MobileBestCrypto = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedImage = localStorage.getItem("selectedImage");
    setImage(savedImage);
  }, []);

  const iconData = [
    bfx_sv_1,
    bfx_sv_2,
    bfx_sv_3,
    bfx_sv_4,
    bfx_sv_5,
    bfx_sv_6,
    bfx_sv_7,
    bfx_sv_8,
    bfx_sv_9,
    bfx_sv_11,
    bfx_sv_10,
    
  ];

  const progressData = [
    {
      title: "Investing skills",
      progress: 25,
      level: "Low",
      description:
        "BFX is currently in its presale phase and available at a discounted price on the official website, with easy purchase options via crypto or credit card.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Growth Potential",
      progress: 85,
      level: "High",
      description:
        "BFX has high growth potential due to its real trading volume, revenue-sharing model, and plans to list on major exchanges after the presale.",
      color: "bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600",
    },
    {
      title: "Risk",
      progress: 30,
      level: "Low",
      description:
        "BFX offers lower risk by allowing early access during presale, with discounted prices and a clear reward structure backed by real platform activity.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Passive Income",
      progress: 90,
      level: "High",
      description:
        "BFX provides passive income through its staking system, allowing holders to earn a share of trading fees without having to trade themselves.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
  ];

  const handleNext = () => {
    navigate("/quiz/step=18");
  };

  return (
    <div 
      style={{
          backgroundColor: "#12121200",
        }}
    className="flex relative flex-col items-center min-h-screen px-4 pt-4 pb-10 bg-white">
      <QuizHeader currentStep={"Top Pick"} totalSteps={28} />
      <QuizSteps currentStep={28} totalSteps={28} />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[28px] text-center text-[#fff] font-bold ">
          You’ve successfully <br /> passed the challenge!
        </h1>
        <p className="text-[16px] text-center font-[600] text-[#fff] mt-2">
        This is the best crypto project on the market that fits specifically your criteria
        </p>

        <div className="bg-[#2a2a2a] w-full rounded-[10px] mt-6 p-4">
          <div className="relative flex items-center justify-center h-[100px] ">
            <div className="absolute -left-3 -top-5">
              <img src={madle} alt="badge" className="w-[60px]" />
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <div className="flex items-start justify-start gap-[1px]">
                <img src={bfx} alt="$BFX" className="w-[150px]" /><span className="font-semibold text-[#fff]">($BFX)</span>
              </div>
              <button
                onClick={handleNext}
                className="mt-4 text-[18px] font-bold bg-[#E6AF03] rounded-[8px] py-3 px-6 w-full max-w-[480px]"
              >
                Amount Raised: $2.5 M
              </button>
            </div>
          </div>

          <div className="mt-4">
            <img src={bfx_img} alt="bfx-img" className="w-full rounded" />
            <p className="text-[14px] text-[#fff] text-center mt-3">
             BlockchainFX is the  first crypto exchange to connect blockchain with global finance. Imagine Binance but with over 500 assets including crypo, stocks, forex, and ETFs. Earn daily USDT rewards with $BFX, even during the presale. Fully audited by Certik and recently awarded the title of fastest growing trading app of 2025.
            </p>
          </div>

          <div className="mt-4 text-center border-b border-t border-[#D9D9D9] py-4">
            <div className="text-sm text-[#fff] font-bold">Launched</div>
            <div className="text-lg font-semibold text-[#fff]">
              May 2025
            </div>
          </div>

          <div className="mt-4 text-center border-b border-[#D9D9D9] pb-4">
            <div className="text-sm text-[#fff] font-bold">Meta</div>
            <div className="text-lg font-semibold text-[#fff]">
              Exchange / Staking
            </div>
          </div>

          <div className=" mt-4 ">
             <div className="text-sm text-center mb-2 text-[#fff] font-bold">Payment Method</div>
            <div className="flex flex-wrap py-2 justify-center gap-3 w-full mx-auto max-w-[350px]">
            {iconData.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt={`icon-${i}`}
                className="w-[40px] h-[40px] object-contain"
              />
            ))}
            </div>
            
          </div>
        </div>

        <div
          className="overflow-hidden pb-6 mb-[4rem] border border-[#C4C7C] mt-6 w-[100%] relative mx-auto  rounded-[8px] px-2"
          style={{}}
        >
           <div className="flex items-center w-[100%]  justify-center mb-6">
            {image && (
              <img
                src={image}
                alt="Selected"
                className="flex w-[220px] h-auto "
              />
            )}
          </div>
       
          <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[2rem] px-2 mx-auto">
            {progressData.map((item, index) => (
              <ProgressBar
                key={index}
                title={item.title}
                progress={item.progress}
                level={item.level}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        </div>
          

        <button
          onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
          className="mt-6 text-[18px] text-[#000] font-[700]  uppercase rounded-[8px] py-3 px-6 w-[94%] mx-auto fixed bottom-[0px]"
        >
          Calculate your earning <br /> potential with $bfx
        </button>
      </div>
    </div>
  );
};

export default MobileBestCrypto;
