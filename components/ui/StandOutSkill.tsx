import React from "react";
import Modal from "react-modal";

export interface StandOutSkillProps {
  value: string;
  onChange: (e) => void;
}
const StandOutSkill = ({ value, onChange }: StandOutSkillProps) => {
  return (
    <div className=" ">
      <label
        className={` flex  rounded-full gap-x-0.5 text-sm w-min px-1 
        
            text-gray-400 bg-white border-2
        `}
      >
        {" "}
        <input
          type="radio"
          value={value}
          className={"m-1"}
          name="standout"
          onChange={onChange}
        />
        {value}
      </label>
    </div>
  );
};

export default StandOutSkill;
