import React from "react";

export interface SearchFilterDashProps {
  dropDownArray: any[];
}

export const SearchFilterDash: React.FC<SearchFilterDashProps> = ({
  dropDownArray,
}) => {
  return (
    <form>
      <select className={"bg-white border border-gray-500"}>
        {dropDownArray &&
          dropDownArray
            .filter((v, i, a) => a.indexOf(v) === i)
            .filter((ele) => ele != "")
            .map((ele) => <option value={ele}> {ele} </option>)}
      </select>
    </form>
  );
};
