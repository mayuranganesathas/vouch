import {
  EyeOffIcon,
  MailOpenIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import react from "react";

export interface TileFeedbackProps {}

const TileFeedback = ({}: TileFeedbackProps) => {
  const [animationClassTop, setAnimationClassTop] = useState(false);
  const [animationClassBottom, setAnimationClassBottom] = useState(false);
  const [animationBg, setAnimationBg] = useState(false);
  const [hiddenItems, setHiddenItems] = useState(false);

  const AnimationChangeTop = () => {
    setAnimationClassTop(true);
    setHiddenItems(true);
    setAnimationBg(true);
  };

  const reset = () => {
    setAnimationClassTop(false);
    setAnimationBg(false);
    setHiddenItems(false);
  };
  return (
    <div
      className={`col-start-1 col-span-2 px-2 grid place-content-evenly py-24 `}
    >
      <div
        className={
          animationBg
            ? `border-2 rounded-t-full rounded-b-full grid place-content-evenly transition-colors ease-in-out delay-500  animation-fadeIn  duration-1000 `
            : `border-2 rounded-t-full rounded-b-full grid place-content-evenly   `
        }
      >
        <div className={"flex justify-center  "}>
          <ReceiptRefundIcon
            className={
              animationClassTop
                ? `  transition ease-in-out   hover:text-VouchGreen animate-myMove text-white scale-125 translate-y-6  `
                : `h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer `
            }
            onClick={AnimationChangeTop}
          />
        </div>
        <div className="py-1.5 flex justify-center">
          <EyeOffIcon
            className={`h-4 w-4   text-transparent hover:text-VouchGreen cursor-pointer `}
          />
        </div>
        <div className={`"flex justify-center pb-0.5" `}>
          <MailOpenIcon
            className={`h-4 w-4 text-transparent hover:text-VouchGreen cursor-pointer 
            `}
          />
          <div className={"w-4"}> </div>
        </div>
      </div>
      <button
        className={"col-start-2 bg-blue-800 rounded-full"}
        onClick={reset}
      >
        {" "}
        reset test
      </button>
    </div>
  );
};

export default TileFeedback;
