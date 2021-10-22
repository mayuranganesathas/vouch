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
      className={`bg-gradient-to-b px-8 py-2 text-red border border-gray-300 w-40 h-auto rounded
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/linkedin.png"
        className={"flex justify-center items-center px-4"}
      />
    </button>
  );
};
