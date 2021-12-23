import React from "react";

export interface PositionFilterVouchProps {
  backgroundColour: "VouchGreen" | "white";
  dropDownArray: any[];
  value: any;
  onChange: (e) => void;
}

export const PositionFilterVouch: React.FC<PositionFilterVouchProps> = ({
  backgroundColour,
  dropDownArray,
  value,
  onChange,
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

  return (
    <form>
      <select
        className={`${backgroundStyles} w-full rounded text-xs text-gray-500 py-2 `}
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
