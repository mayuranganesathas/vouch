import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";
import Modal from "react-modal";
import { useState } from "react";
import VouchCTAModal from "./VouchCTAModal";

export interface VouchCTAProps {}
const VouchCTA = ({}: VouchCTAProps) => {
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
          label="Invite A Candidate to Vouch"
          backgroundColour="VouchGreen"
          buttonType="square"
          textColour="white"
          onClick={openModal}
          buttonWidth="wide"
        />
      </div>

      <VouchCTAModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default VouchCTA;
