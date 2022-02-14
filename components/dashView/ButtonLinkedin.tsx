import React from "react";
export interface ButtonLinkedinProps {
  backgroundColour: "white";
  disabled?: boolean;
  onClick?: () => void;
  userLinkedinURL: any;
}

export const ButtonLinkedin: React.FC<ButtonLinkedinProps> = ({
  backgroundColour,
  disabled = false,
  onClick,
  userLinkedinURL,
}) => {
  const openSite = () => {
    window.open(`https://${userLinkedinURL}`);
  };

  return (
    
    
    <button
      disabled={disabled}
      onClick={openSite}
      type="button"
      className={` bg-white w-4 h-auto flex flex-nowrap text-xs 
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/linkedInTile.png"
        className={"flex justify-center items-center w-8 h-auto"}
      /> <div className={"pl-1"}>Request</div>
    </button>
    
  );
};
