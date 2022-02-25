import React from "react";
import { ViewListIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { ThumbDownIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { EyeOffIcon } from "@heroicons/react/solid";

export interface ButtonNavProps {
  backgroundColour: "gray" | "white";
  buttonType: "rounded" | "square";
  textColour: "black" | "textBlack";
  label: string;
  disabled?: boolean;
  onClick: () => void;
  buttonWidth?: "wide";
  icon: string;
  beacon: boolean;
}

export const ButtonNav: React.FC<ButtonNavProps> = ({
  backgroundColour,
  buttonType,
  textColour,
  label,
  disabled,
  onClick,
  buttonWidth,
  icon,
  beacon,
}) => {
  let buttonSize;

  switch (buttonWidth) {
    case "wide":
      buttonSize = "w-fit";
      break;
  }
  let backgroundStyles;
  switch (backgroundColour) {
    case "gray":
      backgroundStyles = "border-b-8 border-VouchLight";
      break;

    case "white":
      backgroundStyles = "bg-white";
      break;
  }
  let buttonStyles;
  switch (buttonType) {
    case "rounded":
      buttonStyles = "rounded-full";
      break;
    case "square":
      buttonStyles = "rounded-none";
  }

  let textStyles;
  switch (textColour) {
    case "black":
      textStyles = "text-gray-400";
      break;
    case "textBlack":
      textStyles = "text-gray-700";
      break;
  }

  let iconStyles;
  switch (icon) {
    case "Home":
      iconStyles = <ViewListIcon className={"w-4 h-auto"} fill="#d1d5db" />;
      break;
    case "Favorites":
      iconStyles = <StarIcon className={"w-4 h-auto"} fill="#d1d5db" />;
      break;
    case "NotNow":
      iconStyles = <EyeOffIcon className={"w-4 h-auto"} fill="#d1d5db" />;
      break;
    case "Contacted":
      iconStyles = <MailOpenIcon className={"w-4 h-auto"} fill="#d1d5db" />;
      break;
  }

  return (
    <div className="bg-blue-400">
      <button
        onClick={onClick}
        disabled={disabled}
        type="button"
        className={`bg-gradient-to-b px-2 py-1 h-full text-xs font-bold ${buttonSize}
      ${disabled ? "bg-gray-400 opacity-25" : backgroundStyles}
      ${disabled ? "rounded" : buttonStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"} 
      `}
      >
        <div className="flex">
          <div className={textStyles}>{label} </div>
          {beacon ? (
            <span className="flex flex-row ">
              <span className="animate-ping absolute inline-flex h-1.5 w-1.5  rounded-full bg-VouchGreen opacity-75 text"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-VouchGreen"></span>
            </span>
          ) : (
            " "
          )}
        </div>
        <div className={"flex justify-center pt-1"}>{iconStyles}</div>
      </button>
    </div>
  );
};
