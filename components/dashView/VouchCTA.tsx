import React from "react";
import { ButtonVouch } from "../buttonVouch";

export interface VouchCTAProps {
  numberReferred: number;
  numberThanks: number;
}
// brb washroom
const VouchCTA = ({ numberReferred, numberThanks }: VouchCTAProps) => {
  const openModal = () => {
    console.log("test1");
  };
  return (
    <div className="bg-gray-100 rounded-xl shadow-lg w-7/12">
      <div className="flex p-4 gap-8">
        <div className="text-center text-md ">
          <div>Number of People you've referred:</div>
          <div className="font-bold ">{numberReferred}</div>
        </div>
        <div className="text-center text-md">
          <div>Number of People employed thanks to you:</div>
          <div className="font-bold ">{numberThanks}</div>
        </div>
      </div>
      <div className="p-4 text-center">
        <ButtonVouch
          label="Vouch For A Candidate"
          backgroundColour="VouchGreen"
          buttonType="rounded"
          textColour="white"
          onClick={openModal}
          buttonWidth="wide"
        />
      </div>
    </div>
  );
};

export default VouchCTA;
