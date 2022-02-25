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
      buttonBorder = "text-VouchGreen font-bold hover:underline";
      break;

    case "accepted":
      buttonBorder = "text-gray-500";
      break;

    case "pending":
      buttonBorder = "text-gray-300";
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`bg-white w-auto h-auto flex flex-nowrap text-xs 
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div className={""}>
        <div className={buttonBorder}>{anonymous}</div>
      </div>
    </button>
  );
};
