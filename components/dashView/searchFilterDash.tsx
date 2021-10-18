import React from "react";

export interface SearchFilterDashProps {
  filterLabel: string;
  backgroundColour: "VouchGreen" | "white";
}

export const SearchFilterDash: React.FC<SearchFilterDashProps> = ({
  filterLabel,
  backgroundColour,
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
      <label className={"text-sm pr-4"}>{filterLabel}</label>
      <select className={backgroundStyles}>
        <option>Engineering</option>
        <option>Product</option>
        <option>Sales</option>
      </select>
    </form>
  );
};
