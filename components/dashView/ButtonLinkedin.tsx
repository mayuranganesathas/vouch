import React from "react";
export interface ButtonLinkedinProps {
  backgroundColour: "white";
  buttonType: "rounded";
  disabled?: boolean;
}

export const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({
  backgroundColour,
  buttonType,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`bg-gradient-to-b px-8 py-2 text-red border border-gray-300 w-40 h-auto
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "rounded-none" : buttonType}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/linkedin.png"
        className={"flex justify-center items-center"}
      />
    </button>
  );
};
