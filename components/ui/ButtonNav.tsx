import React from "react";
export interface ButtonNavProps {
  backgroundColour: string;
  buttonType: "rounded" | "square";
  textColour: string;
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
  onClick = () => {
    disabled = false;
  };

  let buttonSize;

  switch (buttonWidth) {
    case "wide":
      buttonSize = "h-full w-full";
      break;
  }
  let backgroundStyles;
  switch (backgroundColour) {
    case "OnClick":
      backgroundStyles = "bg-gray-100";
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
      textStyles = "text-black";
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
      className={`bg-gradient-to-b text-red font-bold ${buttonSize}
      ${disabled ? "bg-gray-100" : backgroundColour}
      ${disabled ? "square" : buttonStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div className={textColour}>{label} </div>
    </button>
  );
};
