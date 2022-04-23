import Reach from "react";
import Modal from "react-modal";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";

export interface VouchEmailTemplateModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}
const VouchEmailTemplateModal = ({
  modalIsOpen,
  closeModal,
}: VouchEmailTemplateModalProps) => {
  return (
    <div className="bg-gray-100">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="  w-1/4 h-3/5 bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute inset-2/4 -top-1"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div>
          <img src="./images/VouchEmailTemplate.png" />
        </div>
      </Modal>
    </div>
  );
};

export default VouchEmailTemplateModal;
