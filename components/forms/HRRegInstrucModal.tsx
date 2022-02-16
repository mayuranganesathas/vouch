import Reach from "react";
import Modal from "react-modal";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";
import { RewindIcon } from "@heroicons/react/solid";
import { LockOpenIcon } from "@heroicons/react/solid";
import { FlagIcon } from "@heroicons/react/solid";
import { TagIcon } from "@heroicons/react/solid";

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
        className="  w-1/4 h-3/5 bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute inset-2/4 -top-1"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div>
          <div className={"text-xs px-6"}>
            <div className="flex justify-end">
              <XIcon
                className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer "
                onClick={closeModal}
              />
            </div>
            <div className={"py-10 text-xs"}>
              <div className={"flex justify-center"}>
                <FlagIcon className={"w-8 h-auto "} fill="white" />
              </div>
              <div
                className={
                  "flex justify-center py-2 font-bold text-sm text-white"
                }
              >
                JOIN THE MOVEMENT
              </div>
              <div className={" text-white w-full text-center px-6"}>
                End the war for talent by working together. Gain access to a
                network of candidates of our very own
              </div>
              <div className={"flex justify-center pt-12"}>
                <LockOpenIcon className={"w-8 h-auto"} fill="white" />
              </div>
              <div className={"text-white  w-full px-6 pt-2 pb-12 text-center"}>
                Get access to qualified and active candidates and continuously
                build up your pipeline{" "}
              </div>
              <div className={"flex justify-center pt-8"}>
                <UserAddIcon className={"w-8 h-auto"} fill="white" />
              </div>
              <div className={" text-white text-center px-6 w-full pt-2 pb-12"}>
                Add late stage candidates from your own pipeline and make it a
                win-win!
              </div>
              <div className={"flex justify-center pt-8"}>
                <TagIcon className={"w-8 h-auto"} fill="white" />
              </div>
              <div>
                <div className={" text-white py-2 width-full text-center px-6"}>
                  Use Vouch to save time and money on your next hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IconModal;
