import { useState, useEffect } from "react";
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

const Results = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const [investingSkill1, setInvestingSkill1] = useState(50);
  const [investingSkill2, setInvestingSkill2] = useState(90);
  const [purchasingPower1, setPurchasingPower1] = useState(40);
  const [purchasingPower2, setPurchasingPower2] = useState(70);

  // Function to determine label based on value
  const getInvestingLabel = (value) => {
    if (value < 33) return "Beginner";
    if (value < 66) return "Moderate";
    return "High";
  };

  const getPurchasingLabel = (value) => {
    if (value < 33) return "Limited";
    if (value < 66) return "Moderate";
    return "High";
  };

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
    <div>
      <div className="quiz-container max-w-[1240px] mx-auto min-h-screen overflow-hidden flex flex-col items-center p-4">
        <QuizHeader currentStep={"#Fact Check"} totalSteps={28} />
        <QuizSteps currentStep={28} totalSteps={28} />

        <div className="mt-[2rem] w-[100%]">
          <div className="max-w-[1020px] mx-auto  w-full ">
            <h1 className="text-[40px] text-center text-[#fff] font-bold mb-4 ">
              Congratulations! <br /> You’ve sucessfully passed the Quiz
            </h1>
            <p className="text-[20px]  text-center font-[700] text-[#fff] mb-6 ">
              Here are the results
            </p>
            <div className="flex items-center max-w-[578.2px] mx-auto mb-2">
              <p className="w-[50%] text-[16px] flex justify-center !text-center font-[400] text-[#fff] border-r border-[#353535]">
                Now
              </p>
              <p className="w-[50%] text-[16px] flex justify-center !text-center font-[400] text-[#fff]">
                Goal
              </p>
            </div>
            <div className="max-w-[578.2px] mx-auto w-[100%] bg-[#353535]">
              <img src={result} className="w-[100%]" alt="" />
            </div>
            <div className=" text-white flex flex-col items-center justify-center py-6">
              <div className="max-w-[564.2px] w-full">
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div>
                    <div className="text-white text-sm mb-2">
                      Investing skills
                    </div>
                    <GradientRangeSlider
                      value={investingSkill1}
                      onChange={setInvestingSkill1}
                      gradientColors="from-yellow-500 via-purple-500 to-pink-500"
                      label={getInvestingLabel(investingSkill1)}
                    />
                  </div>
                  <div>
                    <div className="text-white text-sm mb-2">
                      Investing skills
                    </div>
                    <GradientRangeSlider
                      value={investingSkill2}
                      onChange={setInvestingSkill2}
                      gradientColors="from-yellow-500 via-purple-500 to-pink-500"
                      label={getInvestingLabel(investingSkill2)}
                    />
                  </div>
                </div>

                {/* Purchasing Power Section */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-white text-sm mb-2">
                      Purchasing power
                    </div>
                    <GradientRangeSlider
                      value={purchasingPower1}
                      onChange={setPurchasingPower1}
                      gradientColors="from-yellow-500 to-white"
                      label={getPurchasingLabel(purchasingPower1)}
                    />
                  </div>
                  <div>
                    <div className="text-white text-sm mb-2">
                      Purchasing power
                    </div>
                    <GradientRangeSlider
                      value={purchasingPower2}
                      onChange={setPurchasingPower2}
                      gradientColors="from-yellow-500 to-white"
                      label={getPurchasingLabel(purchasingPower2)}
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-[578.2px] space-y-[15px] mx-auto">
                <div className="space-y-[10px]">
                  <p className="text-[16px] font-[400] text-[#fff]">
                    {" "}
                    Your readiness: <span className="text-[#D99A26]">
                       84%
                    </span>{" "}
                  </p>
                  <div className="flex justify-between items-center py-[27px] px-[10px] rounded-[8px] border border-[#C4C7CC] bg-[#353535]">
                    <p className="text-[16px] font-[400] text-[#fff]">
                      {" "}
                      <span className="text-[#D99A26] fofnt-[700]">
                        4-week
                      </span>{" "}
                      program is enough for you to start your investment journey
                    </p>
                    <img src={result_icon_5} alt="" />
                  </div>
                </div>
                <div className="flex justify-between space-x-2">
                  <div className="w-[50%] py-[19px] px-[20px] bg-[#F1F1F1] rounded-[4px]">
                    <div className="flex justify-center space-x-2">
                      <img src={result_icon_1} alt="" />
                      <p className="text-[12px] text-[#24234C] font-[400]">
                        Your goal
                      </p>
                    </div>
                    <p className="text-[14px] text-center text-[#24234C] font-[400]">
                      Financial independence
                    </p>
                  </div>
                  <div className="w-[50%] py-[19px] px-[20px] bg-[#F1F1F1] rounded-[4px]">
                    <div className="flex justify-center space-x-2">
                      <img src={result_icon_2} alt="" />
                      <p className="text-[12px] text-[#24234C] font-[400]">
                        Your goal
                      </p>
                    </div>
                    <p className="text-[14px] text-center text-[#24234C] font-[400]">
                      Financial independence
                    </p>
                  </div>
                </div>
                <div
                  className="flex justify-center py-[8px] items-center space-x-2"
                  style={{
                    background: "rgba(217, 154, 38, 0.20)",
                    borderRadius: "8px",
                  }}
                >
                 <img src={result_icon_4} alt="" />
                  <p className="text-[16px] text-center text-[#ffff] font-[400]">
                    35% Bonus expires in{" "}
                    <span className="font-[700] text-[D99A26] ">44:59 min</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#353535] w-[100%] mb-12">
        <div className="max-w-[578.2px] space-y-[20px] mx-auto py-[40px]">
          <div className="flex justify-center items-center">
           <img src={result_icon_3} className="h-[132px]" alt="" />
          </div>
          <div className="space-y-[10px]">
            <h3 className="text-[24px] text-[#fff] font-[700] text-center">Claim your personal 35% BFX Bonus Code </h3>
            <p className="text-[16px] text-[#fff] font-[400] text-center">You have successfully passed the challenge and are eligible for a one time 35% bonus code which will give you 35% more BFX when you buy now. </p>
            <div className="max-w-[360px] space-y-[10px] mx-auto">
              <p className="text-[16px] text-[#fff] font-[400] ">Get 35% More BFX Coins Now </p>
              <div className="flex justify-between items-center">
                <button className="h-[40px] max-w-[200px] w-[100%] border border-[#fff] rounded-[8px]">upw8U2kbKCKzSZi</button>
                 <button
                 style={{
                  background:"linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)"
                 }}
                 className="h-[40px] max-w-[139px] w-[100%] text-[#000] rounded-[8px]">Buy BFX Now</button>
              </div>
            </div>
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
