import Reach from "react";
import Modal from "react-modal";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";

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
          <div className={"text-xs"}>
               
                <div
                  className={
                    "flex flex-nowrap justify-center py-2 font-bold"
                  }
                >
                  VOUCHING CANDIDATES <UserGroupIcon className={"w-4 h-auto text-VouchGreen pl-0.5 "}  />

                </div>
                <div className={" "}>
                  <div className={"flex justify-center"}>
                    Help other qualified candidates from your recruitment pipeline get noticed! They may not have been your final pick, but they could be someone elses.

                  </div>
                 
                 
                 
                </div>
                
                <div className={"  py-2 flex justify-center flex-nowrap"}>
                  Candidates get invited to join.<MailOpenIcon className={"w-4 h-auto text-VouchGreen pl-0.5"} />

                </div>
                
                <div className={" py-2"}>
                  <div className={"flex justify-center"}>
                    Referred candidates match more easily with our community of recruiters.
<UserAddIcon className={"w-4 h-auto text-VouchGreen pb-0.5"}  />

                  </div>
                  
                </div>
                <div className={"flex justify-center pt-8"}>
                </div>
                <div>
                  <div className={" py-2 flex-nowrap"}>
                    <div className={"flex justify-center"}><SearchCircleIcon className={"w-8 h-auto text-VouchGreen"} />
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