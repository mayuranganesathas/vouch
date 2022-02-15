import React from "react";
export interface ButtonLinkedinProps {
  backgroundColour: "white";
  disabled?: boolean;
  userLinkedinURL: any;
  anonymous: any;
  onClick: () => void;
}

export const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({
  backgroundColour,
  disabled = false,
  userLinkedinURL,
  anonymous,
  onClick,
}) => {
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
      <div className={"pl-1"}>{anonymous ? "Requested" : "Request"}</div>
    </button>
  );
};
