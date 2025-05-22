import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_22 from "../assets/step_22/step_22.png";

const QuizStep22 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
   const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

const [input1Error, setInput1Error] = useState(false);
const [input2Error, setInput2Error] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

 
 const handleNext = () => {
  const input1Valid = input1.trim() !== '';
  const input2Valid = input2.trim() !== '';

  setInput1Error(!input1Valid);
  setInput2Error(!input2Valid);

  if (input1Valid && input2Valid) {
    navigate('/quiz/step=19');
  }
};



  return (
    <div className="quiz-container min-h-screen max-w-[1240px] mx-auto flex flex-col items-center p-4">
      <QuizHeader currentStep={22} totalSteps={28} />
      <QuizSteps currentStep={22} totalSteps={28} />

     <div className="flex justify-between items-center mt-12">
         <div className="max-w-[500px] space-y-[18px] w-full ">
        <h1 className="text-[30px] font-[700] leading-[120%] mb-1 ">
          Ready to see how much <br /> you could earn with BFX
        </h1>
        <div
          className="max-w-[470px] w-[100%] p-[13px]"
          style={{
            background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            borderRadius: "10px",
          }}
        >
          <p className="text-[16px] font-[700] text-[#17181D] leading-[150%] text-[#000]">
            Based on your Goal Income: XY (Add number from slide)
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label
              htmlFor=""
              className=" text-[18px] font-[700] leading-[222%] text-[#fff]"
            >
              Investment in BFX
            </label>
            <input
           onChange={(e) => {
    setInput1(e.target.value);
    setInput1Error(false); 
  }}
              type="text"
              className={`max-w-[216px] w-[100%] px-2 outline-none h-[50px] ${
    input1Error ? 'border-red-900' : ''
  }`}
  style={{
    border: input1Error ? '1px solid #7b0000' : '1px solid #737373',
    borderRadius: '6px',
    background: '#73737300',
  }}
              placeholder="$10,000"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className=" text-[18px] font-[700] leading-[222%] text-[#fff]"
            >
              Investment in BFX
            </label>
            <input
           onChange={(e) => {
    setInput2(e.target.value);
    setInput2Error(false); 
  }}
              type="text"
               className={`max-w-[216px] w-[100%] px-2 outline-none h-[50px] ${
    input2Error ? 'border-red-900' : ''
  }`}
  style={{
    border: input2Error ? '1px solid #7b0000' : '1px solid #737373',
    borderRadius: '6px',
    background: '#73737300',
  }}
              placeholder="$32,087"
            />
          </div>
        </div>
        <div>
          <p className="text-[18px] font-[700] leading-[222%] text-[#fff]">
            Expected Monthly Revenue{" "}
          </p>
          <div
            style={{
              border: "1px solid #737373",
              borderRadius: "6px",
            }}
            className="max-w-[308px] w-[100%] h-[93px] px-[17px] py-[23px]"
          >
            <p className="text-[#E6AF03] text-[40px] font-[700] leading-[112%]">
              $982 - $1580
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[688.434px] w-[100%]">
            <img src={Step_22} alt="" />
      </div>
     </div>
       <div className="flex w-[100%] px-2 justify-start mt-8">
            <button
              onClick={handleNext}
              style={{
                background:"rgb(247 185 85 / var(--tw-bg-opacity, 1))"
              }}
              className="text-black option-card font-semibold py-3 px-8 rounded-[8px] hover:bg-gray-200 transition"
            >
              Continue
            </button>
          </div>
    </div>
  );
};

export default QuizStep22;
