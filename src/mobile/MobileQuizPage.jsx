import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import AgeOption from "../components/AgeOption";
import Loading from "../components/Loading";
import card_img1 from "../assets/quiz/card_image (3).webp";
import card_img2 from "../assets/quiz/card_image (1).webp";
import card_img3 from "../assets/quiz/card_image (2).webp";
import card_img4 from "../assets/quiz/card_image.webp";

const MobileQuizPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const ageOptions = [
    { range: "18-24", image: card_img1 },
    { range: "25-34", image: card_img2 },
    { range: "35-44", image: card_img3 },
    { range: "45+", image: card_img4 },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (range, image) => {
    setSelectedOption(range);
    localStorage.setItem("selectedImage", image);
    navigate("/quiz/fact-check");
  };

  return (
    <div className="relative min-h-screen">
      <QuizHeader currentStep={"Quiz"} totalSteps={18} />
      <QuizSteps currentStep={1} totalSteps={28} />
      <div className="w-full px-4 pt-6 overflow-y-auto text-center pb-14 max-h-auto">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[29px] uppercase font-[700] leading-[120%] text-[#fff]">
            What’s Your Crypto <br /> Potential in 2025?
          </h1>

          <p className="text-[14px] font-[400] leading-[150%] uppercase text-[#fff]">
            {" "}
            Take <span className="font-[700]">the 1-minute quiz</span> and
            discover now
          </p>
          <p className="text-[16px] font-[400] mt-2 text-[#fff]">
            SELECT YOUR <span className="font-[700]">AGE</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[4rem] gap-x-4 mb-8 mt-[4rem]">
          {ageOptions.map((option) => (
            <AgeOption
              key={option.range}
              ageRange={option.range}
              imageUrl={option.image}
              isSelected={selectedOption === option.range}
              onClick={() => handleSelect(option.range, option.image)}
            />
          ))}
        </div>

         {/* <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`gold-button py-3 px-8 rounded-full font-medium ${!selectedOption ? "opacity-50" : ""}`}
        >
          Continue
        </button>   */}
        <div className="flex flex-col items-center">
          <p className="text-[#B1B1B1] text-[12px] font-[400] leading-[133.333%]">
            By clicking on an age group, you agree with <br />
            <a
              className="underline"
              href="https://blockchainfx.io/terms-of-service"
              target="_blank"
            >
              Terms and Conditions
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://blockchainfx.io/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <p className="text-[#B1B1B1] text-[12px] font-[400] leading-[133.333%] absolute bottom-4 left-0 right-0 text-center">
        BlockchainFX 2025 ©All Rights Reserved.
      </p>
    </div>
  );
};

export default MobileQuizPage;
