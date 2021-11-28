import React from "react";
export interface ButtonNavProps {
  backgroundColour: "gray" | "white";
  buttonType: "rounded" | "square";
  textColour: "black" | "VouchGreen";
  label: string;
  disabled?: boolean;
  onClick: () => void;
  buttonWidth?: "wide";
}

export const ButtonNav: React.FC<ButtonNavProps> = ({
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
      buttonSize = "w-10/12";
      break;
  }
  let backgroundStyles;
  switch (backgroundColour) {
    case "gray":
      backgroundStyles = "bg-gray-50";
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
      buttonStyles = "rounded";
  }

  let textStyles;
  switch (textColour) {
    case "black":
      textStyles = "text-gray-400";
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
      className={`bg-gradient-to-b px-8 py-1 h-full font-bold ${buttonSize}
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
