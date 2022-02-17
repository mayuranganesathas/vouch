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
      buttonBorder = "px-1 border-2 border-gray-400 rounded-full";
      break;

    case "accepted":
      buttonBorder = "px-1 border-2 border-VouchGreen rounded-full";
      break;

    case "pending":
      buttonBorder = "px-1 border-2 border-VouchYellow rounded-full";
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
      <img
        src="./images/linkedInTile.png"
        className={"flex justify-center items-center w-8 h-auto"}
      />{" "}
      <div className={"pl-1"}>
        <div className={buttonBorder}>{anonymous}</div>
      </div>
    </button>
  );
};
