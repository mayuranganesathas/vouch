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
  ...props
}) => {
  let backgroundStyles;
  switch (backgroundColour) {
    case "blue":
      backgroundStyles =
        "from-blue-500 to-blue-500 border-blue-900 hoever: from-blue-400";
      break;

    case "white":
      backgroundStyles =
        "bg-white border-gray-300 border-2 hover:from-blue-200";
      break;
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={`bg-gradient-to-b px-4 py-2 font-bold border-b-4 rounded-xl 
      ${disabled ? "bg-gray-400" : backgroundStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      {...props}
    >
      <span className={`${disabled ? "text-gray-50" : "text-" + textColour}`}>
        {label}
      </span>
    </button>
  );
};
