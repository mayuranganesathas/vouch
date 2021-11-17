import React from "react";
export interface ButtonConnectedProps {
  backgroundColour: "white";
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonConnected: React.FC<ButtonConnectedProps> = ({
  backgroundColour,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`border border-gray-300 rounded w-32 h-10
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}

      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div className={"grid grid-cols-2"}>
        <div className={"text-gray-500 text-xs py-1 px-2"}>
          {" "}
          Move to Contacted
        </div>
        <img
          src="./images/moveCandidate.png"
          width="auto"
          height="auto"
          className={"flex justify-center items-center py-2 px-2"}
        />
      </div>
    </button>
  );
};
