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
    <div className={"bg-white w-full h-full"}>
      <div className={"bg-gray-100 w-full h-full px-8"}>
        <div className={"flex flex-wrap content-center"}>
          <div className={"grid grid-cols-1 h-full"}>
            <div>{getComponent(stage)}</div>

            <div>
              {" "}
              <ButtonVouch
                backgroundColour={"VouchGreen"}
                buttonType={"rounded"}
                textColour={"white"}
                label={"Yes, Sign me up!"}
                disabled={false}
                onClick={nextStage}
              />
              <ButtonVouch
                backgroundColour={"VouchGreen"}
                buttonType={"rounded"}
                textColour={"white"}
                label={"Previous"}
                disabled={false}
                onClick={previousStage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
