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
      return <CandidateOnTwo />;
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
