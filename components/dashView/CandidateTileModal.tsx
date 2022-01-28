import { useMutation } from "@apollo/client";
import { XIcon } from "@heroicons/react/solid";
import React from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";

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
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" w-3/6 h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute place-content-center"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div>
          <XIcon
            className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
            onClick={closeModal}
          />
          <div>
            <button
              onClick={moveToContacted}
              className="bg-blue-300 rounded-lg text-bold"
            >
              {" "}
              Email Button{" "}
            </button>
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
