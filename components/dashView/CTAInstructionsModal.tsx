import Reach from "react";
import Modal from "react-modal";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";


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
                <div
                  className={
                    "flex flex-nowrap justify-left py-4 font-bold text-sm"
                  }
                >
                  VOUCHING CANDIDATES 

                </div>
                <div className={" "}>
                <UserGroupIcon className={"w-6 h-auto text-VouchGreen py-2 "}  />
                  <div className={"flex justify-left flex-nowrap pb-6"}>
                  Help other qualified candidates from your recruitment pipeline get noticed! They may not have been your final pick, but they could be someone elses.

                  </div>
                 
                 
                 
                </div>
                
                <MailOpenIcon className={"w-6 h-auto text-VouchGreen py-2"} />
                <div className={"  pb-6 flex justify-left flex-nowrap"}>
                  Candidates get invited to join.

                </div>
                
                <div className={""}>
                <UserAddIcon className={"w-6 h-auto text-VouchGreen py-2"}  />

                  <div className={"flex justify-left pb-6"}>
                    Referred candidates match more easily with our community of recruiters.

                  </div>
                  
                </div>
               
                <div>
                  <div className={""}>
                  <SearchCircleIcon className={"w-6 h-auto text-VouchGreen py-2"} />
                    <div className={"flex justify-left pb-6"}>
                      Pay it forward. Find active and qualified candidates for your next hire.
                  </div>
                    
                  </div>
                </div>
              </div>          </div>
        </Modal>
      </div>
    );
  };
  
  export default IconModal;