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
      className={`bg-gradient-to-b px-8 py-2 text-red border border-gray-300 w-40 h-auto rounded
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}

      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/email.png"
        width="auto"
        height="auto"
        className={"flex justify-center items-center px-8"}
      />
    </button>
  );
};
