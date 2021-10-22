import React from "react";
export interface ButtonLinkedinProps {
  backgroundColour: "white";
  disabled?: boolean;
}

export const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({
  backgroundColour,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`border border-gray-300 w-16 py-1 rounded
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/linkedin.png"
        className={"flex justify-center items-center p-1"}
      />
    </button>
  );
};
