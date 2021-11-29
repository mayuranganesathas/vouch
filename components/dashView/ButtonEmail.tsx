import React from "react";
export interface ButtonEmailProps {
  backgroundColour: "white";
  disabled?: boolean;
  onClick?: () => void;
  userEmailAction: any;
}

export const ButtonEmail: React.FC<ButtonEmailProps> = ({
  backgroundColour,
  disabled,
  onClick,
  userEmailAction,
}) => {
  const openEmail = () => {
    window.open(`${userEmailAction}`);
  };
  return (
    <button
      onClick={openEmail}
      disabled={disabled}
      type="button"
      className={`border border-gray-300 rounded px-4 py-1 h-10 w-16
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
