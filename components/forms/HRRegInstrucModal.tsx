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
        className="  w-1/4 h-auto bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute inset-2/4 -top-1"
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
            <div className={"py-2 text-xs"}>
              <div
                className={"flex justify-start font-bold text-sm text-gray-600"}
              >
                JOIN THE MOVEMENT
              </div>
              <div className={" text-gray-006 w-full text-start"}>
                End the war for talent by working together. Gain access to a
                network of candidates of our very own
              </div>
              <div className={"flex flex-nowrap justify-start pt-4"}>
                <div>
                  <LockOpenIcon className={"w-8 h-auto text-VouchGreen"} />
                </div>
                <div
                  className={"text-gray-600  w-full pt-2 pb-4 pl-2 text-start"}
                >
                  Get access to qualified and active candidates and continuously
                  build up your pipeline{" "}
                </div>
              </div>

              <div className={"flex flex-nowrap justify-start pt-2"}>
                <div>
                  <UserAddIcon className={"w-8 h-auto text-VouchGreen"} />
                </div>
                <div
                  className={" text-gray-600 text-start-full pt-2 pb-4 pl-2"}
                >
                  Add late stage candidates from your own pipeline and make it a
                  win-win!
                </div>
              </div>

              <div className={"flex flex-nowrap justify-start pt-2"}>
                <div>
                  <TagIcon className={"w-8 h-auto text-VouchGreen"} />
                </div>
                <div
                  className={
                    " text-gray-600 py-2 width-full text-start pb-4 pl-2 "
                  }
                >
                  Use Vouch to save time and money on your next hire
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IconModal;
