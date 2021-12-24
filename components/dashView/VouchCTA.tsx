import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import Modal from "react-modal";
import { useState } from "react";
import VouchCTAModal from "./VouchCTAModal";

export interface VouchCTAProps {
  numberReferred: number;
  numberThanks: number;
}
const VouchCTA = ({ numberReferred, numberThanks }: VouchCTAProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="text-center">
        <ButtonVouch
          label="Vouch For A Candidate"
          backgroundColour="VouchGreen"
          buttonType="square"
          textColour="white"
          onClick={openModal}
          buttonWidth="wide"
        />
      </div>
      <div className="text-sm text-gray-500 pt-4 ">
        Candidates you've referred: {numberReferred}
      </div>
      <div className="text-sm text-gray-500 ">
        {" "}
        Candidates landing roles: {numberThanks}
      </div>
      <VouchCTAModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default VouchCTA;
