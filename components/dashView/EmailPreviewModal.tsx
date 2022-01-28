import { useMutation } from "@apollo/client";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface IconModalProps {
  modalIsOpen: boolean;

  closeModal: () => void;
}

const IconModal = ({ modalIsOpen, closeModal }: IconModalProps) => {
  return (
    <div className="bg-gray-100">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="  w-1/4 h-2/4 bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute inset-1/4"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div>
          <img src="./images/email_preview.png" className=" text-center" />
        </div>
      </Modal>
    </div>
  );
};

export default IconModal;
