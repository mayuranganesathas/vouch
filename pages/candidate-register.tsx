import { useState } from "react";
import React from "react";
import { CandidateOnOne } from "../components/CandidateOnboarding/CandidateOnOne";
import { CandidateOnTwo } from "../components/CandidateOnboarding/CandidateOnTwo";
import { CandidateOnThree } from "../components/CandidateOnboarding/CandidateOnThree";
import { ButtonVouch } from "../components/ui/ButtonVouch";
import { useMutation } from "@apollo/client";
import { UPSERT_CANDIDATE_METADATA } from "../graphql/UPSERT_CANDIDATE_METADATA";
import router from "next/router";

export default function CandidateOn(props) {
  enum STAGE {
    CandidateOnOne,
    CandidateOnTwo,
    CandidateOnThree,
  }
  const hrId = router.query.hrId.toString();
  const candidateEmail = router.query.email.toString();

  const [stage, setStage] = useState(STAGE.CandidateOnOne);
  const [positionTitle, setPositionTitle] = useState("");

  const [industry, setIndustry] = useState("");

  const [linkedIn, setLinkedIn] = useState("");
  const [email, setEmail] = useState(candidateEmail);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobSeniority, setJobSeniority] = useState("");
  const [companyName, setCompanyName] = useState("");

  //filter out the URL and pass into variables
  const clearFormState = () => {
    setPositionTitle("");
    setIndustry("");
    setLinkedIn("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setLocationCity("");
    setLocationState("");
    setCompanyWebsite("");
    setJobCategory("");
    setJobSeniority("");
    setCompanyName("");
  };

  const [initializeCandidateMetaData, { data, loading, error }] = useMutation(
    UPSERT_CANDIDATE_METADATA,

    {
      variables: {
        positionTitle: "incompleteField",
        industry: "incompleteField",
        companyWebsite: "incompleteField",
        companyName: "incompleteField",
        linkedIn: "incompleteField",
        locationCity: "incompleteField",
        locationState: "incompleteField",
        candidateEmail: "incompleteField",
        candidateFirstName: "incompleteField",
        candidateLastName: "incompleteField",
        hrId: "incompleteField",
        jobCategory: "incompleteField",
        seniority: "incompleteField",
      },
    }
  );
  //update UPSERT INFORMATION VARIABLES
  // PARSE URL AND PASS INTO HRID
  const formValidator = () => {
    const positionTitleValidator = positionTitle;

    const industry1Validator = industry;

    if (positionTitleValidator && industry1Validator) {
      return true;
    }
    return false;
  };

  const onSubmit = () => {
    nextStage();
    initializeCandidateMetaData({
      variables: {
        positionTitle: positionTitle,
        industry: industry,
        companyWebsite: companyWebsite,
        linkedIn: linkedIn,
        locationCity: locationCity,
        locationState: locationState,
        candidateEmail: email,
        candidateFirstName: firstName,
        candidateLastName: lastName,
        hrId: hrId,
        seniority: jobSeniority,
        jobCategory: jobCategory,
        companyName: companyName,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
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
            companyWebsite={companyWebsite}
            setCompanyWebsite={setCompanyWebsite}
            positionTitle={positionTitle}
            setPositionTitle={setPositionTitle}
            industry={industry}
            setIndustry={setIndustry}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            linkedIn={linkedIn}
            setLinkedIn={setLinkedIn}
            locationCity={locationCity}
            setLocationCity={setLocationCity}
            locationState={locationState}
            setLocationState={setLocationState}
            companyName={companyName}
            setCompanyName={setCompanyName}
            jobCategory={jobCategory}
            setJobCategory={setJobCategory}
            jobSeniority={jobSeniority}
            setJobSeniority={setJobSeniority}
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
    <div className={"bg-white w-full h-screen"}>
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
    </div>
  );
}
