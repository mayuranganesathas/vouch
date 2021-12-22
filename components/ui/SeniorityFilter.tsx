import React from "react";

export interface SeniorityFilterProps {
  backgroundColour: "VouchGreen" | "white";
  dropDownArraySeniority: any[];
  value?: any;
  onChange?: (e) => void;
  width?: "wide-md" | "wide-lg" | "wide-sm";
}

export const SeniorityFilter: React.FC<SeniorityFilterProps> = ({
  backgroundColour,
  dropDownArraySeniority,
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
      backgroundStyles = "bg-white border-2 border-gray-200 px-1";
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
        className={`${backgroundStyles} ${buttonWidth} rounded-md text-base w-min font-bold text-gray-500 py-3 px-8 `}
        name="Select From List"
        id="Select From List"
        value={value}
        onChange={onChange}
      >
        {dropDownArraySeniority &&
          dropDownArraySeniority
            .filter((v, i, a) => a.indexOf(v) === i)
            .filter((ele) => ele != "")
            .map((ele) => <option value={ele}> {ele} </option>)}
      </select>
    </form>
  );
};
