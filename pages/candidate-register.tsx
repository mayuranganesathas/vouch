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

  const [stage, setStage] = useState(STAGE.CandidateOnOne);
  const [job1, setJob1] = useState("");
  const [job2, setJob2] = useState("");
  const [job3, setJob3] = useState("");
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [year3, setYear3] = useState("");
  const [industry1, setIndustry1] = useState("");
  const [industry2, setIndustry2] = useState("");
  const [industry3, setIndustry3] = useState("");
  const [jobArray, setJobArray] = useState([
    "Select Job",
    "jobA",
    "jobB",
    "jobC",
  ]);
  const [yearArray, setYearArray] = useState([
    "Select Year",
    "10+",
    "5-9",
    "3-5",
    "1-2",
    "0-1",
  ]);
  const [industryArray, setIndustryArray] = useState([
    "Select Industry",
    "Finance",
    "Gaming",
    "SaaS",
    "Space",
  ]);

  const hrId = router.query.hrId.toString();
  //filter out the URL and pass into variables
  const clearFormState = () => {
    setJob1("");
    setJob2("");
    setJob3("");
    setYear1("");
    setYear2("");
    setYear3("");
    setIndustry1("");
    setIndustry2("");
    setIndustry3("");
    setJobArray(["jobA"]);
    setYearArray(["10+"]);
    setIndustryArray(["Finance"]);
  };

  const [initializeCandidateMetaData, { data, loading, error }] = useMutation(
    UPSERT_CANDIDATE_METADATA,

    {
      variables: {
        positionTitle1: "incompleteField",
        positionTitle2: "incompleteField",
        positionTitle3: "incompleteField",
        industry1: "incompleteField",
        industry2: "incompleteField",
        industry3: "incompleteField",
        companyWebsite1: "incompleteField",
        companyWebsite2: "incompleteField",
        companyWebsite3: "incompleteField",
        linkedIn: "incompleteField",
        Location1: "incompleteField",
        candidateEmail: "incompleteField",
        candidateFirstName: "incompleteField",
        candidateLastName: "incompleteField",
        hrId: "incompleteField",
      },
    }
  );
  //update UPSERT INFORMATION VARIABLES
  // PARSE URL AND PASS INTO HRID
  const formValidator = () => {
    const job1Validator = job1;
    const job2Validator = job2;
    const job3Validator = job3;
    const year1Validator = year1;
    const year2Validator = year2;
    const year3Validator = year3;
    const industry1Validator = industry1;
    const industry2Validator = industry2;
    const industry3Validator = industry3;
    const jobArrayValidator = jobArray;
    const yearArrayValidator = yearArray;
    const industryArrayValidator = industryArray;

    if (
      job1Validator &&
      job2Validator &&
      year1Validator &&
      year2Validator &&
      industry1Validator &&
      industry2Validator
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = () => {
    nextStage();
    initializeCandidateMetaData({
      variables: {
        positionTitle1: job1,
        positionTitle2: job2,
        positionTitle3: job3,
        industry1: industry1,
        industry2: industry2,
        industry3: industry3,
        companyWebsite1: "incompleteField",
        companyWebsite2: "incompleteField",
        companyWebsite3: "incompleteField",
        linkedIn: "incompleteField",
        Location1: "incompleteField",
        candidateEmail: "incompleteField",
        candidateFirstName: "incompleteField",
        candidateLastName: "incompleteField",
        hrId: hrId,
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
            job1={job1}
            setJob1={setJob1}
            job2={job2}
            setJob2={setJob2}
            job3={job3}
            setJob3={setJob3}
            year1={year1}
            setYear1={setYear1}
            year2={year2}
            setYear2={setYear2}
            year3={year3}
            setYear3={setYear3}
            industry1={industry1}
            setIndustry1={setIndustry1}
            industry2={industry2}
            setIndustry2={setIndustry2}
            industry3={industry3}
            setIndustry3={setIndustry3}
            jobArray={jobArray}
            setJobArray={setJobArray}
            yearArray={yearArray}
            setYearArray={setYearArray}
            industryArray={industryArray}
            setIndustryArray={setIndustryArray}
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
