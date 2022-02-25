import React from "react";
export interface ButtonLinkedinProps {
  backgroundColour: "white";
  disabled?: boolean;
  userLinkedinURL: any;
  anonymous: string;
  onClick: () => void;
  buttonStatus: "request" | "accepted" | "pending";
}

export const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({
  backgroundColour,
  disabled = false,
  userLinkedinURL,
  anonymous,
  onClick,
  buttonStatus,
}) => {
  let buttonBorder;
  switch (buttonStatus) {
    case "request":
      buttonBorder = "px-2  bg-gray-200 rounded-full";
      break;

    case "accepted":
      buttonBorder = "px-2 bg-VouchGreen text-green-700 rounded-full";
      break;

    case "pending":
      buttonBorder = "px-2 bg-VouchYellow text-yellow-500 rounded-full";
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={` bg-white w-4 h-auto flex flex-nowrap text-xs 
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div className={"pl-2"}>
        <div className={buttonBorder}>{anonymous}</div>
      </div>
    </button>
  );
};
