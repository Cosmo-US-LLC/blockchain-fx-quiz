import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_20_1 from "../assets/step_20/step_20 (5).png";
import Step_20_2 from "../assets/step_20/step_20 (4).png";
import Step_20_3 from "../assets/step_20/step_20 (3).png";
import Step_20_4 from "../assets/step_20/step_20 (2).png";
import Step_20_5 from "../assets/step_20/step_20 (1).png";

const QuizStep20 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { title: "Real product and active users", img: Step_20_1 },
    { title: "Daily passive income potential", img: Step_20_2 },
    { title: "Audited and secure", img: Step_20_3 },
    { title: "Early access before major growth", img: Step_20_4 },
    { title: "Huge upside potential", img: Step_20_5 },
  ];
  const toggleOption = (index) => {
  if (selectedOptions.includes(index)) {
    // remove from selected
    setSelectedOptions(selectedOptions.filter(i => i !== index));
  } else {
    // add to selected
    setSelectedOptions([...selectedOptions, index]);
  }
};

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    if (selectedOptions) {
      navigate("/quiz/step=17");
    }
  };

  return (
    <div className="quiz-container min-h-screen max-w-[1240px] mx-auto flex flex-col items-center p-4">
      <QuizHeader currentStep={20} totalSteps={28} />
      <QuizSteps currentStep={20} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-12">
        <h1 className="text-[30px] font-[700] leading-[120%] mb-1 text-center">
          When you look at a new crypto projects, <br /> what matters most to
          you?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
       {options.map((option, index) => (
  <div
    key={index}
    style={{
      background: selectedOptions.includes(index) ? "#FFD551" : "rgba(245, 245, 245, 0.15)",
      border: selectedOptions.includes(index) ? "2px solid #E5AE00" : "2px solid transparent",
      transition: "background-color 0.3s, border-color 0.3s",
    }}
    className="option-card py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer"
    onClick={() => toggleOption(index)}
  >
    <img src={option.img} className="h-[40px]" alt="" />
    <p className={`w-[88%] text-start font-medium ${selectedOptions.includes(index) ? "text-black" : "text-white"}`}>
      {option.title}
    </p>
  </div>
))}
        </div>

        {/* Continue Button */}
     
        <div className="text-center mt-8">
            <button
              onClick={handleContinue}
          disabled={selectedOptions === null}
              style={{
                background:"rgb(247 185 85 / var(--tw-bg-opacity, 1))"
              }}
              className="text-black option-card font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
            >
              Continue
            </button>
          </div>
      </div>
    </div>
  );
};

export default QuizStep20;
