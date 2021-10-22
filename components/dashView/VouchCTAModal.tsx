import React from "react";
import Modal from "react-modal";

// ref http://reactcommunity.org/react-modal/
//ref https://github.com/tailwindlabs/heroicons
export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const VouchCTAModal = ({ modalIsOpen, closeModal }: VouchCTAModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "75%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Test Name"
      >
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>{" "}
        <button onClick={closeModal} className="bg-red-300">
          close
        </button>
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
