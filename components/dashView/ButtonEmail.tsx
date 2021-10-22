import React from "react";
export interface ButtonEmailProps {
  backgroundColour: "white";
  disabled?: boolean;
}

export const ButtonEmail: React.FC<ButtonEmailProps> = ({
  backgroundColour,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`border border-gray-300 rounded px-4 py-1 w-14
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}

      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/email.png"
        width="auto"
        height="auto"
        className={"flex justify-center items-center"}
      />
    </button>
  );
};
