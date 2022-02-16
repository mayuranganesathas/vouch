import { useEffect, useState } from "react";
import React from "react";
import { CandidateOnOne } from "../components/forms/CandidateOnOne";
import { CandidateOnTwo } from "../components/forms/CandidateOnTwo";
import { CandidateOnThree } from "../components/forms/CandidateOnThree";
import { ButtonVouch } from "../components/ui/ButtonVouch";
import { useMutation, useQuery } from "@apollo/client";
import { UPSERT_CANDIDATE_METADATA } from "../graphql/UPSERT_CANDIDATE_METADATA";
import router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QUERY_CANDIDATE_ID } from "../graphql/QUERY_CANDIDATE_ID";
import Head from "next/head";

export default function CandidateOn(props) {
  enum STAGE {
    CandidateOnOne,
    CandidateOnTwo,
    CandidateOnThree,
  }
  const hrId = router.query.hrId.toString();
  const candidateUUID = router.query.privacyId.toString();

  const [stage, setStage] = useState(STAGE.CandidateOnOne);
  const [linkedIn, setLinkedIn] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationState, setLocationState] = useState("");

  const { data: CanId } = useQuery(QUERY_CANDIDATE_ID, {
    variables: { hrId: hrId, privacyId: candidateUUID },
  });

  const clearFormState = () => {
    setLinkedIn("");
    setCandidateEmail("");
    setFirstName("");
    setLocationCity("");
    setLocationState("");
  };

  const [initializeCandidateMetaData, { data, loading, error }] = useMutation(
    UPSERT_CANDIDATE_METADATA,

    {
      variables: {
        linkedIn: "incompleteField",
        locationCity: "incompleteField",
        locationState: "incompleteField",
        candidateEmail: "incompleteField",
        candidateFirstName: "incompleteField",
        hrId: "incompleteField",
        candidateId: "incompleteField",
        privacyId: "incompleteField",
      },
    }
  );

  const formValidator = () => {
    const linkedInValidator = linkedIn;
    const candidateEmailValidator = candidateEmail;
    const firstNameValidator = firstName;
    const locationCityValidator = locationCity;
    const locationStateValidator = locationState;

    if (
      linkedInValidator &&
      candidateEmailValidator &&
      firstNameValidator &&
      locationStateValidator &&
      locationCityValidator
    ) {
      return true;
    }
    return false;
  };

  const toastFeedback = () => {
    toast.success("Form Submitted!✅ ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const onSubmit = () => {
    nextStage();
    initializeCandidateMetaData({
      variables: {
        linkedIn: linkedIn,
        locationCity: locationCity,
        locationState: locationState,
        candidateEmail: candidateEmail,
        candidateFirstName: firstName,
        hrId: hrId,
        candidateId: CanId.hr_voucher_metadata[0].candidateId,
        privacyId: candidateUUID,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    toastFeedback();
    clearFormState();
  };
  const previousStage = () => {
    if (stage > STAGE.CandidateOnOne) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.CandidateOnThree) {
      setStage(stage + 1);
    }
  };

  const getComponent = (stage: STAGE) => {
    if (stage == STAGE.CandidateOnOne) {
      return (
        <div>
          <CandidateOnOne onClick={nextStage} />
          <div className={"flex justify-center items-center gap-4 pt-4"}> </div>
        </div>
      );
    } else if (stage == STAGE.CandidateOnTwo) {
      return (
        <div>
          <CandidateOnTwo
            candidateEmail={candidateEmail}
            setCandidateEmail={setCandidateEmail}
            firstName={firstName}
            setFirstName={setFirstName}
            linkedIn={linkedIn}
            setLinkedIn={setLinkedIn}
            locationCity={locationCity}
            setLocationCity={setLocationCity}
            locationState={locationState}
            setLocationState={setLocationState}
            previousStage={previousStage}
            completeForm={onSubmit}
            formValidation={formValidator}
          />
        </div>
      );
    } else if (stage == STAGE.CandidateOnThree) {
      return (
        <div>
          <CandidateOnThree />
        </div>
      );
    }
  };

  return (
    <div className={"bg-gray-100 w-full h-screen"}>
      <Head>
        <title>Register | Vouch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={"grid grid-cols-12 h-screen"}>
        <div className={"col-start-1 col-end-2"}></div>
        <div
          className={
            "col-start-2 col-end-12 bg-gray-100 flex items-center justify-center"
          }
        >
          <div>{getComponent(stage)}</div>
        </div>
        <div className={"col-start-12 col-end-13"}></div>
      </div>
      <ToastContainer
        position="top-right"
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
}
