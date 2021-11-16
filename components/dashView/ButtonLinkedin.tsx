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
    window.open({ userLinkedinURL });
  };

  return (
    <button
      disabled={disabled}
      onClick={openSite}
      type="button"
      className={`border border-gray-300 w-16 py-1 rounded
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/linkedin.png"
        className={"flex justify-center items-center p-1"}
      />
    </button>
  );
};
