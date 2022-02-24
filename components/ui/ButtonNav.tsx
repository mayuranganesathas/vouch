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
    <div>
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
        {beacon ? (
          <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></div>
        ) : (
          ""
        )}
        {/* TO DO: CREATE ANIMATION, ping beside Home, Favoirtes, HIdden and Contacted */}
        <div className={textStyles}>{label} </div>
        <div className={"flex justify-center pt-1"}>{iconStyles}</div>
      </button>
      {beacon ? "true" : "false"}
      {/* 
      <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 text-VouchDark"></div>
      <div className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></div> */}
    </div>
  );
};
