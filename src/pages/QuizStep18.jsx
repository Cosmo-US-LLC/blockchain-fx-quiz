
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_18_1 from "../assets/step_18/step_18 (3).png"
import Step_18_2 from "../assets/step_18/step_18 (2).png"
import Step_18_3 from "../assets/step_18/step_18 (1).png"
import CheckIcon from "../components/CheckIcon"

const QuizStep18 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Yes, but I don’t know how", 
      img:Step_18_1
    },
     {
      title:"I’m already retired", 
      img:Step_18_2
    },
     {
      title:"I haven’t thought about retirement", 
      img:Step_18_3
    },
  ]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  
    const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    setTimeout(() => {
      navigate("/quiz/step=15")
    }, 200);
  };

  

  return (
    <div className="quiz-container min-h-screen  flex flex-col items-center px-4">
      <QuizHeader currentStep={14} totalSteps={18} />
      <QuizSteps currentStep={18} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
 <h1 className="text-[30px] font-[700] leading-[120%] mb-1  text-center">Do you want to retire wealthy?</h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
            {options.map((option) => (
            <div
              key={option.title}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
             className={` relative py-4 px-6 flex items-center transition-all duration-150 ease-in-out justify-between rounded-[8px] cursor-pointer ${
                selectedOption === option.title
                  ? "border border-[#fcd24b] bg-[#121212] opacity-100 scale-100"
                  : "bg-[#EDEDED] border border-[#0000]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.img} className="h-[40px]" alt="" />
              <p className="w-[88%] text-white text-start font-medium">{option.title}</p>
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

export default QuizStep18
