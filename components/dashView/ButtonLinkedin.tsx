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
    window.open(`${userLinkedinURL}`);
    console.log(userLinkedinURL);
  };

  return (
    <button
      disabled={disabled}
      onClick={openSite}
      type="button"
      className={`border-2 bg-white w-auto h-auto rounded
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/linkedInTile.png"
        className={"flex justify-center items-center p-1.5 w-8 h-auto"}
      />
    </button>
  );
};
