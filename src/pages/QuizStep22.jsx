import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_22 from "../assets/step_22/step_22.png";

const QuizStep22 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [input1, setInput1] = useState("$10,000");
  const [input2, setInput2] = useState("");

  const [input1Error, setInput1Error] = useState(false);
  const [input2Error, setInput2Error] = useState(false);
  const [bfxAmount, setBfxAmount] = useState(0);
  const [bfxValue, setBfxValue] = useState(0);
  const [monthlyRevenueLow, setMonthlyRevenueLow] = useState(0);
  const [monthlyRevenueHigh, setMonthlyRevenueHigh] = useState(0);

  const location = useLocation();
  const goalIncome = localStorage.getItem("goalIncome") || "$10,000";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    const input1Valid = input1.trim() !== "";

    setInput1Error(!input1Valid);

    if (input1Valid) {
      navigate("/quiz/fact-check-no=5");
    }
  };
  const formatNumber = (value) => {
    const number = parseFloat(value.replace(/,/g, ""));
    if (isNaN(number)) return "";
    return number.toLocaleString();
  };
  const handleInput1Change = (e) => {
    setInput1Error(false);
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const formatted = raw ? `$${formatNumber(raw)}` : "";
    setInput1(formatted);
  };

  useEffect(() => {
    const investment = parseFloat(input1.replace(/[$,]/g, ""));
    if (!isNaN(investment) && investment > 0) {
      setInput1Error(false);
      const bfx = investment / 0.0145;
      const bfxUsd = bfx * 0.05;
      const revenueLow = (investment * 1.57) / 12;
      const revenueHigh = (investment * 2.97) / 12;

      setBfxAmount(bfx);
      setBfxValue(bfxUsd);
      setMonthlyRevenueLow(revenueLow);
      setMonthlyRevenueHigh(revenueHigh);
    } else {
      setInput1Error(true);
      setBfxAmount(0);
      setBfxValue(0);
      setMonthlyRevenueLow(0);
      setMonthlyRevenueHigh(0);
    }
  }, [input1]);

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center px-4 pb-4">
      <QuizHeader currentStep={""} totalSteps={""} />
      <QuizSteps currentStep={24} totalSteps={28} />

      <div className="flex justify-between max-w-[1160px] w-[100%] mx-auto items-center mt-4">
        <div className="max-w-[475px] space-y-[18px] w-full ">
          <h1 className="text-[30px] font-[700] leading-[120%] mb-1 ">
           Estimate Your Potential <br /> Earnings with BFX
          </h1>
          <span
            className="py-[12px] "
           
          >
            <p className="text-[16px] font-[600] text-[#fff] leading-[150%] text-[#000]">
             Target Monthly Income : <span className=" italic">{goalIncome}</span>
            </p>
          </span>
          <div className="space-y-[12px]">
            <div className="">
              <label
                htmlFor=""
                className=" text-[18px] block font-[700] leading-[222%] text-[#fff]"
              >
                BFX Purchase Amount:
              </label>
              <input
                value={`${input1}`}
                onChange={handleInput1Change}
                type="text"
                className={` w-[100%] px-2 outline-none h-[50px] ${
                  input1Error ? "border-red-900" : ""
                }`}
                style={{
                  border: input1Error
                    ? "1px solid #7b0000"
                    : "1px solid #737373",
                  borderRadius: "6px",
                  background: "#73737300",
                }}
                placeholder="$10,000"
              />
            </div>
            <div className="h-[1px] w-[100%] flex bg-[#737373] !mt-8 "></div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className=" text-[18px] block font-[700] leading-[222%] text-[#fff]"
              >
                Projected Value at Launch:
              </label>

              <p
                className={` w-[100%] text-[#FED34C] overflow-hidden text-nowrap font-[700] flex items-center px-2 outline-none h-[50px]`}
                style={{
                  border: "1px solid #737373",
                  borderRadius: "6px",
                  background: "#73737300",
                }}
              >
                {" "}
                {bfxAmount.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}{" "}
                BFX ($
                {bfxValue.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
                )
              </p>
            </div>
          </div>
          
          <div>
            <p className="text-[18px] font-[700] leading-[222%] text-[#fff]">
              Estimated Monthly Returns:
            </p>
            <div
              style={{
                border: "1px solid #737373",
                borderRadius: "6px",
              }}
              className=" w-[100%] h-[93px] px-[17px] py-[23px]"
            >
              <p className="text-[#E6AF03] overflow-hidden text-nowrap text-[40px] font-[700] leading-[112%]">
                ${monthlyRevenueLow.toFixed(0)} - $
                {monthlyRevenueHigh.toFixed(0)}
              </p>
            </div>
          </div>
           <div className="!mt-6 w-[]">
        

        <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[18px] w-[100%] text-[20px] text-[#000] font-[700] hover:opacity-80 transition transform active:scale-95`}
          >
          UNLOCK YOUR SPECIAL BONUS (1/3)
          </button>
       </div>
        </div>
        <div className="max-w-[650.434px] w-[100%] ">
          <img src={Step_22} alt="" />
          <p className="text-[16px] text-center font-[600] text-[#fff] ">*Projected monthly returns are based on the average earnings recorded during the last 6 months of BlockchainFX’s beta testing phase. These figures are not guaranteed and actual results may vary depending on market conditions and platform activity.</p>
        </div>
      </div>
    </div>
  );
};

export default QuizStep22;
