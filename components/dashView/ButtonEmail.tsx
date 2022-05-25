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
    const res = await fetch("/api/email/interestEmail", {
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
      className={`border bg-white rounded px-2 w-auto h-auto
      ${disabled ? "bg-gray-400 opacity-25" : backgroundColour}

      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <img
        src="./images/email.png"
        className={"flex justify-center items-center w-5 h-auto"}
      />
    </button>
  );
};
