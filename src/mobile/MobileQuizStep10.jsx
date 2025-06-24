
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_10_1 from "../assets/step_10/step_10 (4).png"
import Step_10_2 from "../assets/step_10/step_10 (1).png"
import Step_10_3 from "../assets/step_10/step_10 (5).png"
import Step_10_4 from "../assets/step_10/step_10 (2).png"
import Step_10_5 from "../assets/step_10/step_10 (3).png"
import CheckIcon from "../components/CheckIcon"

const MobileQuizStep10 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Not enough income", 
      img:Step_10_1
    },
     {
      title:"Lack of time", 
      img:Step_10_2
    },
     {
      title:"No access to the right opportunities", 
      img:Step_10_3
    },
     {
      title:"I just need something that actually works", 
      img:Step_10_4
    },
     {
      title:"Fear of losing money", 
      img:Step_10_5
    },
  ]
 useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    setTimeout(() => {
      navigate("/quiz/step=9");
    }, 200);
  };

  

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={8} totalSteps={18} />
      <QuizSteps currentStep={10} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">What’s holding you back <br /> from living the life you want?</h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
              {options.map((option) => (
            <div
              key={option.title}
              style={{
                background: "rgba(245, 245, 245, 0.15)",
              }}
              className={` relative py-4 space-x-2 px-6 flex items-center transition-all duration-150 ease-in-out justify-between rounded-[8px] cursor-pointer ${
                selectedOption === option.title
                  ? "border border-[#fcd24b] bg-[#121212] opacity-100 scale-100"
                  : "bg-[#EDEDED] border border-[#0000]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.img} className="h-[40px]" alt="" />
              <p className="w-[88%] text-white text-start font-medium">
                {option.title}
              </p>
              <div
                className={`bg-[#fcd24b] absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-1.5 flex items-center justify-center
  transition-all duration-150 ease-in-out
  ${
    selectedOption === option.title
      ? "opacity-100 scale-100"
      : "opacity-0 scale-0"
  }
`}
              >
                <CheckIcon className="w-4 h-4 text-[#000]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep10
