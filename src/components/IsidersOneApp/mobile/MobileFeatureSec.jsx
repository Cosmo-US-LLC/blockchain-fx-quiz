import herobnr1 from "../../../assets/oneApp/featured/bnrhero (4).svg";
import herobnr2 from "../../../assets/oneApp/featured/bnrhero (3).svg";
import herobnr3 from "../../../assets/oneApp/featured/bnrhero (2).svg";
import herobnr4 from "../../../assets/oneApp/featured/bnrhero (1).svg";

function MobileFeatureSec() {
  return (
    <div className="">
      <div className="w-[100%]   ">
        <div
          style={
          {
            background:"rgba(255, 255, 255, 0.10)",
            border:"1px solid rgba(0, 0, 0, 0.20)", 
          }
        }
        className="py-4 gap-1 flex flex-col relative justify-center items-center rounded-[6.357px] w-[100%]">
          <h2 className="text-[16.697px] font-[700] text-[#fff] tracking-[-0.267px]">
            Featured In:
          </h2>
          <div className="flex items-center justify-center gap-2 px-2">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            {/* <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" rel="noopener noreferrer"> */}
            <img
              loading="lazy"
              src={herobnr1}
              className="w-[175px] h-[30px]  "
              alt="Featured"
            />
            {/* </a> */}
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            {/* <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" rel="noopener noreferrer"> */}
            <img
              loading="lazy"
              src={herobnr2}
              className="w-[135px] h-[24px] opacity-[0.5] "
              alt="Featured"
            />
            {/* </a> */}
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            {/* <a href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/" target="_blank" rel="noopener noreferrer"> */}
            <img
              loading="lazy"
              src={herobnr3}
              className="w-[145px] h-[24px] opacity-[0.5]"
              alt="Featured"
            />
            {/* </a> */}
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            {/* <a href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/" target="_blank" rel="noopener noreferrer"> */}
            <img
              loading="lazy"
              src={herobnr4}
              className="w-[105px] h-[24px] opacity-[0.5]"
              alt="Featured"
            />
            {/* </a> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFeatureSec;
