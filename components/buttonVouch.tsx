import React from "react";
export interface ButtonVouchProps {
  backgroundColour?: "VouchGreen" | "white";
  buttonType?: "rounded" | "square";
  textColour?: "black" | "white";
  label: string;
  disabled?: boolean;
}

export const ButtonVouch: React.FC<ButtonVouchProps> = ({
  backgroundColour,
  buttonType,
  textColour,
  label,
  disabled = false,
}) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "VouchGreen":
      backgroundStyles = "bg-VouchGreen";
      break;

    case "white":
      backgroundStyles = "bg-white border-gray-400 border-2";
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
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={`bg-gradient-to-b px-8 py-2 text-red
      ${disabled ? "bg-gray-400 opacity-25" : backgroundStyles}
      ${disabled ? "rounded-none" : buttonStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div className={textStyles}>{label} </div>
    </button>
  );
};
