
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_19_1 from "../assets/step_19/step_19 (3).png"
import Step_19_2 from "../assets/step_19/step_19 (1).png"
import Step_19_3 from "../assets/step_19/step_19 (2).png"

const QuizStep19 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"I always aim to get in early and catch the biggest upside", 
      img:Step_19_1
    },
     {
      title:"Sometimes I’m a bit late — still trying to improve", 
      img:Step_19_2
    },
     {
      title:"I really don’t want to miss the next big opportunity", 
      img:Step_19_3
    },
  ]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    navigate("/quiz/step=16")
  }

  

  return (
    <div className="quiz-container min-h-screen max-w-[1240px] mx-auto flex flex-col items-center p-4">
      <QuizHeader currentStep={19} totalSteps={28} />
      <QuizSteps currentStep={19} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-12">
 <h1 className="text-[30px] font-[700] leading-[120%] mb-1  text-center">When it comes to high-growth projects, <br /> how early do you usually get involved?</h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
            {options.map((option) => (
            <div
              key={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
              onClick={handleNext}
            >
              <img src={option.img} className="h-[40px]" alt="" />
              <p className="w-[88%] text-white text-start font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuizStep19
