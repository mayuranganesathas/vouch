import React from "react";
export interface ButtonEmailProps {
  backgroundColour: "white";
  disabled?: boolean;
  onClick?: () => void;
  userEmailAction: any;
}

export const ButtonEmail: React.FC<ButtonEmailProps> = ({
  backgroundColour,
  disabled,
  userEmailAction,
}) => {
  const sendOpeningEmail = async () => {
    const res = await fetch("/api/interestEmail", {
      body: JSON.stringify({
        email: userEmailAction,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };
  return (
    <button
      onClick={sendOpeningEmail}
      disabled={disabled}
      type="button"
      className={`border border-gray-300 rounded px-4 py-1 h-10 w-16
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}

      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/email.png"
        width="auto"
        height="auto"
        className={"flex justify-center items-center"}
      />
    </button>
  );
};
