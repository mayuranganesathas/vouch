import { useState } from "react";
import React from "react";
import { CandidateOnOne } from "../components/CandidateOnboarding/CandidateOnOne";
import { CandidateOnTwo } from "../components/CandidateOnboarding/CandidateOnTwo";
import { CandidateOnThree } from "../components/CandidateOnboarding/CandidateOnThree";
import { ButtonVouch } from "../components/ui/ButtonVouch";

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
  const [jobArray, setJobArray] = useState(["jobA", "jobB", "jobC"]);
  const [yearArray, setYearArray] = useState([
    "10+",
    "5-9",
    "3-5",
    "1-2",
    "0-1",
  ]);
  const [industryArray, setIndustryArray] = useState([
    "Finance",
    "Gaming",
    "SaaS",
    "Space",
  ]);

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
      return <CandidateOnOne />;
    } else if (stage == STAGE.CandidateOnTwo) {
      return (
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
        />
      );
    } else if (stage == STAGE.CandidateOnThree) {
      return <CandidateOnThree />;
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
          <div>
            {getComponent(stage)}

            <div className={"flex justify-center items-center gap-4 pt-4"}>
              {" "}
              <ButtonVouch
                backgroundColour={"VouchGreen"}
                buttonType={"rounded"}
                textColour={"white"}
                label={"Previous"}
                disabled={false}
                onClick={previousStage}
              />
              <ButtonVouch
                backgroundColour={"VouchGreen"}
                buttonType={"rounded"}
                textColour={"white"}
                label={"Yes, Sign me up!"}
                disabled={false}
                onClick={nextStage}
              />
            </div>
          </div>
        </div>
        <div className={"col-start-12 col-end-13"}></div>
      </div>
    </div>
  );
}
