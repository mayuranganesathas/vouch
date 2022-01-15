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
  const [animationClassMid, setAnimationClassMid] = useState(false);
  const [animationBg, setAnimationBg] = useState(false);
  const [hiddenItems, setHiddenItems] = useState("");

  const AnimationChangeTop = () => {
    setAnimationClassTop(true);
    setHiddenItems(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide  scale-125 translate-y-6"
    );
    setAnimationBg(true);
  };

  const AnimationClassMid = () => {
    setAnimationClassMid(true);
    setHiddenItems(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide  scale-125 translate-y-6"
    );
    setAnimationBg(true);
  };

  const reset = () => {
    setAnimationClassTop(false);
    setAnimationBg(false);
    setHiddenItems("");
  };
  return (
    <div
      className={`col-start-1 col-span-2 px-2 grid place-content-evenly py-24 `}
    >
      <div
        className={`border-2 rounded-t-full rounded-b-full grid place-content-evenly transition hover:bg-VouchGreen delay-150 duration-1000  ease-in `}
      >
        <div className={"flex justify-center  "}>
          <ReceiptRefundIcon
            className={
              animationClassTop
                ? `  transition ease-in-out  hover:text-VouchGreen animate-myMove  scale-125 translate-y-6  `
                : `h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer `
            }
            onClick={AnimationChangeTop}
          />
        </div>
        <div className="py-1.5 flex justify-center">
          <EyeOffIcon
            className={
              animationClassMid
                ? "transition ease-in-out  hover:text-VouchGreen animate-fadeColorIn  scale-125 translate-y-6 "
                : `h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${hiddenItems} `
            }
            onClick={AnimationClassMid}
          />
        </div>
        <div className={`"flex justify-center pb-0.5" `}>
          <MailOpenIcon
            className={`h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${hiddenItems} `}
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
