

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

const QuizStep2 = () => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {

    navigate("/quiz/step=3")
  }

  

  return (
    <div className="quiz-container min-h-screen max-w-[1240px] mx-auto flex flex-col items-center p-4">
     <QuizHeader currentStep={2} totalSteps={28} />
      <QuizSteps currentStep={2} totalSteps={28} />

      <div className="w-[100%] max-w-[1000px] mt-12">
        <h1 className="text-[30px] font-[700] leading-[120%] mb-1 text-center">What is your main goal?</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card pr-4 flex items-center justify-between rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
              onClick={handleNext}
            >
              <img src={option.img} className="h-[100px]" alt="" />
              <p className="w-[60%] text-white font-medium">{option.title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default QuizStep2
