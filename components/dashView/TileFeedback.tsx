import {
  EyeOffIcon,
  MailOpenIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import react from "react";

export interface TileFeedbackProps {}

const TileFeedback = ({}: TileFeedbackProps) => {
  const [animationClassTop, setAnimationClassTop] = useState("");
  const [animationClassMiddle, setAnimationClassMiddle] = useState("");
  const [animationClassBottom, setAnimationClassBottom] = useState("");

  const [animationBackground, setAnimationBackground] = useState("");

  const AnimationChangeTop = () => {
    setAnimationClassTop(
      " transition  delay-500 duration-500 ease-linear  -translate-y-12 text-VouchGreen	"
    );
    setAnimationClassMiddle(
      "transition  delay-700 duration-1000 ease-linear invisible	 "
    );
    setAnimationClassBottom(
      "transition  delay-700 duration-1000 ease-linear invisible	 "
    );
    setAnimationBackground(
      " transition  delay-700 duration-1000 ease-linear bg-VouchGreen"
    );
  };

  const AnimationChangeMid = () => {
    setAnimationClassTop(
      " transition  delay-500 duration-500 ease-linear  -translate-y-12 text-VouchGreen	"
    );
    setAnimationClassMiddle(
      " transition  delay-500 duration-500 ease-linear  -translate-y-12 text-VouchGreen	"
    );
    setAnimationClassBottom(
      "transition  delay-700 duration-1000 ease-linear invisible	 "
    );
    setAnimationBackground(
      " transition  delay-700 duration-1000 ease-linear bg-VouchGreen"
    );
  };

  const AnimationChangeBottom = () => {
    setAnimationClassTop(
      " transition  delay-500 duration-500 ease-linear  -translate-y-12 text-VouchGreen	"
    );
    setAnimationClassMiddle(
      " transition  delay-500 duration-500 ease-linear  -translate-y-12 text-VouchGreen	"
    );
    setAnimationClassBottom(
      "transition  delay-700 duration-1000 ease-linear invisible	 "
    );
    setAnimationBackground(
      " transition  delay-700 duration-1000 ease-linear bg-VouchGreen"
    );
  };

  const reset = () => {
    setAnimationClassTop("");
    setAnimationClassMiddle("");
    setAnimationClassBottom("");

    setAnimationBackground("");
  };
  return (
    <div className={`col-start-1 col-span-2 px-2 grid place-content-evenly `}>
      <div
        className={`border-2 rounded-t-full rounded-b-full grid place-content-evenly ${animationBackground}`}
      >
        <div className={"flex justify-center  "}>
          <ReceiptRefundIcon
            className={`h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${animationClassTop}
`}
            onClick={AnimationChangeTop}
          />
        </div>
        <div className="py-1.5 flex justify-center">
          <EyeOffIcon
            className={`            h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer  ${animationClassMiddle}
`}
            onClick={AnimationChangeMid}
          />
        </div>
        <div className={"flex justify-center pb-0.5"}>
          <MailOpenIcon
            className={`h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${animationClassBottom}`}
            onClick={AnimationChangeBottom}
          />
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
