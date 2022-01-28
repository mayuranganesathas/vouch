import { useMutation } from "@apollo/client";
import { XIcon } from "@heroicons/react/solid";
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
    <div className="bg-gray-100">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" lg:w-1/6 lg:h-2/6 xl:w-2/6 xl:h-2/6 bg-gray-100 shadow-lg rounded-xl p-2 m-8  overflow-auto absolute "
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className="bg-white rounded-t-lg">
          <XIcon
            className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
            onClick={closeModal}
          />
          <div className="text-VouchDark bg-white text-center text-xl font-bold py-2">
            Ready to Connect with {candidateFirstName}?
          </div>
          <div className="bg-gray-100 py-2">
            <div className="bg-gray-100 py-2">
              Click on the "Contact Candidate" button. An email will be sent to
              the candidate directly (Don't worry! You're CC'd).
            </div>
            <div className="bg-gray-100 py-2">
              If they are interested, they will get back to you shortly.
            </div>
            <div className="bg-gray-100 py-8 px-8">
              <ButtonVouch
                onClick={moveToContacted}
                backgroundColour="VouchGreen"
                buttonType="rounded"
                textColour="white"
                label="Yes, Email Candidate"
              />
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
