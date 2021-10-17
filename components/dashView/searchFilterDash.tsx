import React from "react";

export interface SearchFilterDashProps {
  filterList: string;
  backgroundColour: "VouchGreen" | "White";
}

export const SearchFilterDash: React.FC<SearchFilterDashProps> = (
  filterList,
  backgroundColour
) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "VouchGreen":
      backgroundStyles = "bg-VouchGreen";
      break;
    case "White":
      backgroundStyles = "bg-white";
      break;
  }
  return (
    <form className={backgroundStyles}>
      <label>Filter Referred Canddiates by:</label>
      <select>
        <option>Engineering</option>
        <option>Product</option>
        <option>Sales</option>
      </select>
    </form>
  );
};
