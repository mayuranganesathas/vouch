import React from "react";

export interface SearchFilterDashProps {
  backgroundColour: "VouchGreen" | "white";
  dropDownArray: string[];
}

export const SearchFilterDash: React.FC<SearchFilterDashProps> = ({
  backgroundColour,
  dropDownArray,
}) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "VouchGreen":
      backgroundStyles = "bg-VouchGreen border-2 border-gray-400 px-8";
      break;
    case "white":
      backgroundStyles = "bg-gray-50 border-2 border-gray-400 px-8";
      break;
  }
  return (
    <form>
      <select className={backgroundStyles}>
        {dropDownArray &&
          dropDownArray.map((ele) => <option value={ele}> {ele} </option>)}
      </select>
    </form>
  );
};
