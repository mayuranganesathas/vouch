import Reach from "react";
import Modal from "react-modal";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";
import { RewindIcon } from "@heroicons/react/solid";

export interface IconModalProps{
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
            <div className={"py-4 px-4 col-start-1 bg-VouchDark rounded-l-lg"}>
          <div className={"py-10 "}>
            <div className={"flex justify-start px-6"}>
              <UserAddIcon className={"w-8 h-auto "} fill="white" />
            </div>
            <div
              className={
                "py-2 px-6 font-bold text-lg text-white"
              }
            >
              JOIN THE NETWORK
            </div>
            <div className={"text-sm text-white w-full  px-6"}>
              You really impressed in your last interview. That time and
              validation is valuable.
            </div>
           
            <div className={" pt-12 px-6"}>
              <RewindIcon className={"w-8 h-auto"} fill="white" />
            </div>
            <div
              className={
                "text-sm text-white  px-6 w-full pt-2 pb-12"
              }
            >
              Don’t start back from at zero. Get referred to other comparable
              positions.
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