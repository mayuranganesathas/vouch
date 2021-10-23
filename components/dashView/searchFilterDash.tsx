import React from "react";

export interface SearchFilterDashProps {
  backgroundColour: "VouchGreen" | "white";
  dropDownArray: any[];
  value: any;
  onChange: (e) => void;
  width?: "wide-md" | "wide-lg" | "wide-sm";
}

export const SearchFilterDash: React.FC<SearchFilterDashProps> = ({
  backgroundColour,
  dropDownArray,
  value,
  onChange,
  width,
}) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "VouchGreen":
      backgroundStyles = "bg-VouchGreen border-1 border-gray-200 px-8";
      break;
    case "white":
      backgroundStyles = "bg-white border-2 border-gray-200 px-8";
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
      buttonWidth = "w-40";
      break;
  }
  return (
    <form>
      <select
        className={`${backgroundStyles} ${buttonWidth} rounded-md `}
        name="Select From List"
        id="Select From List"
        value={value}
        onChange={onChange}
      >
        {dropDownArray &&
          dropDownArray
            .filter((v, i, a) => a.indexOf(v) === i)
            .filter((ele) => ele != "")
            .map((ele) => <option value={ele}> {ele} </option>)}
      </select>
    </form>
  );
};
