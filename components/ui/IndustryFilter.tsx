import React from "react";

export interface IndustryFilterProps {
  backgroundColour: "VouchGreen" | "white";
  dropDownArrayIndustry: any[];
  value?: any;
  onChange?: (e) => void;
  width?: "wide-md" | "wide-lg" | "wide-sm";
}

export const IndustryFilter: React.FC<IndustryFilterProps> = ({
  backgroundColour,
  dropDownArrayIndustry,
  value,
  onChange,
  width,
}) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "VouchGreen":
      backgroundStyles = "bg-VouchGreen border-1 border-gray-200 px-1 ";
      break;
    case "white":
      backgroundStyles = "bg-white border-2 border-gray-300 px-1 w-full";
      break;
  }
  let buttonWidth;
  switch (width) {
    case "wide-lg":
      buttonWidth = "w-96";
      break;
    case "wide-md":
      buttonWidth = "w-60";
      break;
    case "wide-sm":
      buttonWidth = "w-36";
      break;
  }
  return (
    <form>
      <select
        className={`${backgroundStyles} ${buttonWidth} rounded-md text-base w-full font-bold text-gray-500 py-3 px-12 `}
        name="Select From List"
        id="Select From List"
        value={value}
        onChange={onChange}
      >
        {dropDownArrayIndustry &&
          dropDownArrayIndustry
            .filter((v, i, a) => a.indexOf(v) === i)
            .filter((ele) => ele != "")
            .map((ele) => <option value={ele}> {ele} </option>)}
      </select>
    </form>
  );
};
