

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import Loading from "../components/Loading"
import QuizSteps from "../components/QuizSteps"
import step_2img1 from "../assets/step_2/step_2 (6).png"
import step_2img2 from "../assets/step_2/step_2 (5).png"
import step_2img3 from "../assets/step_2/step_2 (4).png"
import step_2img4 from "../assets/step_2/step_2 (1).png"
import step_2img5 from "../assets/step_2/step_2 (2).png"
import step_2img6 from "../assets/step_2/step_2 (3).png"
import CheckIcon from "../components/CheckIcon"



const MobileQuizStep2 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Grow wealth", 
      img:step_2img1
    },
     {
      title:"Passive income", 
      img:step_2img2
    },
     {
      title:"Financial freedom", 
      img:step_2img3
    },
     {
      title:"Be my own boss", 
      img:step_2img4    },
     {
      title:"Travel the world", 
      img:step_2img5
    },
    {
      title:"Retire wealthy", 
      img:step_2img6
    },
  ]

// const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   localStorage.setItem("mainGoal", option.title);
//   navigate("/quiz/step=3");
// };
 const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("mainGoal", option.title);
    setTimeout(() => {
      navigate("/quiz/step=3");
    }, 200);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // const handleNext = () => {

  //   navigate("/quiz/step=3")
  // }

  

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
     <QuizHeader currentStep={2} totalSteps={18} />
      <QuizSteps currentStep={2} totalSteps={28} />

      <div className="w-[100%] max-w-[1000px max-w-[1240px] mx-auto">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">What is your main goal?</h1>

        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          {/* {options.map((option) => (
            <div
              key={option}
              value={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card pr-4 flex space-x-2 items-center justify-between rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.img} className="h-[100px]" alt="" />
              <p className="w-[60%] text-[16px] text-white font-medium">{option.title}</p>
            </div>
          ))} */}
            {options.map((option) => (
            <div
              key={option.title}
              value={option}
              style={{
                background: "rgba(245, 245, 245, 0.15)",
              }}
              className={` relative pr-4 flex items-center transition-all duration-150 ease-in-out justify-between rounded-[8px] cursor-pointer ${
                selectedOption === option.title
                  ? "border border-[#fcd24b] bg-[#121212] opacity-100 scale-100"
                  : "bg-[#EDEDED] border border-[#0000]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.img} className="h-[100px]" alt={option.title} />
              <p className="w-[60%] text-white font-medium">{option.title}</p>

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

export default MobileQuizStep2
