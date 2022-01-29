import { useMutation } from "@apollo/client";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface TileModalProps {
  modalIsOpen: boolean;
  userEmailAction: string;
  hrEmail: string;
  candidateFirstName: string;
  hrData: any;
  closeModal: () => void;
  refetchShortList: any;
  userID: any;
  hrId: any;
}

const TileModal = ({
  modalIsOpen,
  closeModal,
  userEmailAction,
  hrEmail,
  candidateFirstName,
  hrData,
  refetchShortList,
  userID,
  hrId,
}: TileModalProps) => {
  const [ThumbUpAndDownMutation, { data, loading, error }] = useMutation(
    //Mutation for updating a user emoji value after a practice
    INSERT_THUMBS_UP_AND_DOWN,
    {
      onCompleted: refetchShortList,
    }
  );

  const toastFeedback = () => {
    toast.success("Interest Email Sent! ✅", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sendEmail = async () => {
    const res = await fetch("/api/interestEmail", {
      body: JSON.stringify({
        email: userEmailAction,
        hrEmail: hrEmail,
        candidateFirstName: candidateFirstName,
        hrFirstName: hrData.hr_voucher[0].firstName,
        hrLastName: hrData.hr_voucher[0].lastName,
        companyName: hrData.hr_voucher[0].companyName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  const moveToContacted = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "contacted",
        candidateId: userID,
      },
    });
    toastFeedback();

    sendEmail();
    closeModal();
  };
  return (
    <div className="bg-white">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="  xl:w-auto xl:h-5/12 bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute "
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className={"flex justify-end pr-2"}>
          <XIcon
            className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer "
            onClick={closeModal}
          />
        </div>
        <div className="bg-white rounded-t-lg text-xs">
          <div className="text-VouchDark bg-white text-center text-xl font-bold pb-2 rounded-t-lg">
            Ready to Connect with {candidateFirstName}?
          </div>
          <div className="bg-gray-100 py-4 px-12">
            <div className="py-2">
              1. Click on the "Contact Candidate" button.
            </div>
            <div className="py-2">
              2. An email will be sent to the candidate directly (don't worry!
              You're cc-ed).
            </div>

            <div className=" py-2">
              3. If they are interested, they will get back to you shortly.
            </div>
          </div>
          <div className="bg-white px-12 py-6">
            <div className="grid grid-cols-2">
              <div className="px-2">
                <ButtonVouch
                  onClick={moveToContacted}
                  backgroundColour="VouchGreen"
                  buttonType="square"
                  textColour="white"
                  label="Yes, Email Candidate"
                />
              </div>
              <div className="px-2">
                <ButtonVouch
                  onClick={moveToContacted}
                  backgroundColour="gray"
                  buttonType="square"
                  textColour="black"
                  label="I already reached out"
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex italic text-VouchDark px-2 pt-1">
                <span className="">Click&nbsp;</span>
                <InformationCircleIcon className=" text-gray-300 w-5 h-5 hover:text-VouchDark cursor-pointer" />
                <span> &nbsp;to review the email</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default TileModal;
