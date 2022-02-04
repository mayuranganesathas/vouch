import React from "react";
export interface HyperlinkButtonProps {
  backgroundColour: "VouchGreen" | "white" | "empty" | "gray";
  buttonType: "rounded" | "square";
  textColour: "black" | "white" | "VouchGreen";
  label: string;
  disabled?: boolean;
  onClick: () => void;
  buttonWidth?: "wide" | "fit";
}

export const HyperlinkButton: React.FC<HyperlinkButtonProps> = ({
  backgroundColour,
  buttonType,
  textColour,
  label,
  disabled,
  onClick,
  buttonWidth,
}) => {
  let buttonSize;

  switch (buttonWidth) {
    case "wide":
      buttonSize = "w-full";
      break;

    case "fit":
      buttonSize = "w-fit";
      break;
  }
  let backgroundStyles;
  switch (backgroundColour) {
    case "VouchGreen":
      backgroundStyles = "bg-VouchGreen ";
      break;

    case "white":
      backgroundStyles = "bg-white ";
      break;

    case "empty":
      backgroundStyles = "border-white border-2";
      break;

    case "gray":
      backgroundStyles = "bg-gray-300";
      break;
  }
  let buttonStyles;
  switch (buttonType) {
    case "rounded":
      buttonStyles = "rounded-full";
      break;
    case "square":
      buttonStyles = "rounded";
  }

  let textStyles;
  switch (textColour) {
    case "black":
      textStyles = "text-gray-400";
      break;
    case "white":
      textStyles = "text-white";
      break;
    case "VouchGreen":
      textStyles = "text-VouchGreen";
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={` py-2 text-xs drop-shadow-md font-bold  ${buttonSize}
      ${disabled ? "bg-gray-400 opacity-25" : backgroundStyles}
      ${disabled ? "rounded" : buttonStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div className={textStyles}>{label} </div>
    </button>
  );
};
