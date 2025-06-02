import React from "react";

const AgeOption = ({ ageRange, imageUrl, isSelected, onClick }) => {
  return (
    <div
      className={`option-card !border !border-[#FCD24B] rounded-lg  cursor-pointer ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="h-32 relative ">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`Person age ${ageRange}`}
          className="w-full object-cover absolute 2xl:h-[150px]  xl:h-[150px]  lg:h-[150px] md:h-[150px]  sm:h-[175px]  h-[175px]  2xl:top-[-17%] xl:top-[-17%] lg:top-[-17%] md:top-[-17%] sm:top-[-36.5%] top-[-36.5%] z-[99]"
        />
      </div>
      <div className="p-3 text-center bg-[#FCD24B] rounded-b-[5px]">
        <p className="text-[#000] flex text-center items-center justify-center font-medium">
          Age: {ageRange}  
        <div className="pl-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  d="M0.744962 11.9904C0.667317 11.9131 0.60571 11.8211 0.563674 11.7199C0.521639 11.6186 0.5 11.5101 0.5 11.4004C0.5 11.2908 0.521639 11.1823 0.563674 11.081C0.60571 10.9798 0.667317 10.8878 0.744962 10.8104L5.15496 6.40044L0.744962 1.99044C0.667482 1.91302 0.606008 1.82111 0.564051 1.71994C0.522094 1.61876 0.500476 1.51032 0.500429 1.40079C0.500383 1.29127 0.52191 1.1828 0.563781 1.0816C0.605652 0.980388 0.667047 0.888419 0.744462 0.810939C0.821876 0.733459 0.913793 0.671986 1.01496 0.630029C1.11614 0.588072 1.22458 0.566453 1.33411 0.566406C1.44363 0.56636 1.5521 0.587887 1.65331 0.629758C1.75451 0.671629 1.84648 0.733024 1.92396 0.810439L6.92396 5.81044C7.00161 5.88783 7.06321 5.97978 7.10525 6.08102C7.14729 6.18227 7.16892 6.29081 7.16892 6.40044C7.16892 6.51006 7.14729 6.61861 7.10525 6.71985C7.06321 6.8211 7.00161 6.91305 6.92396 6.99044L1.92396 11.9904C1.84659 12.0679 1.7547 12.1294 1.65355 12.1714C1.5524 12.2133 1.44397 12.2349 1.33446 12.2349C1.22496 12.2349 1.11653 12.2133 1.01537 12.1714C0.91422 12.1294 0.822331 12.0679 0.744962 11.9904Z"
                  fill="black"
                />
              </svg>
        </div>
        </p>
      </div>
    </div>
  );
};

export default AgeOption;
