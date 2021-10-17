import React from "react";
export interface ButtonVouchProps {
  backgroundColour?: "blue" | "white";

  textColour?: string;
  label: string;
  disabled?: boolean;
}

export const ButtonVouch: React.FC<ButtonVouchProps> = ({
  backgroundColour,
  textColour,
  label,
  disabled = false,
}) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "blue":
      backgroundStyles = "bg-blue-400";
      break;

    case "white":
      backgroundStyles = "bg-white";
      break;
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={`bg-gradient-to-b px-4 py-2 font-bold border-b-4 rounded-lg 
      ${disabled ? "bg-blue-400" : backgroundStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <span className={`${disabled ? "text-red-100" : "text-" + textColour}`}>
        {label}
      </span>
    </button>
  );
};
