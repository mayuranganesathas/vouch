import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface CandidateOnOneProps {
  onClick: () => void;
}

export const CandidateOnOne: React.FC<CandidateOnOneProps> = ({ onClick }) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={" shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className="flex justify-center items-center">
          <img
            src="./images/JoinUs.png"
            width="400"
            height="auto"
            className={"flex justify-center items-center py-2 px-2"}
          />
        </div>
        <div className={"px-10"}>
          <div className={" px-10 font-bold text-lg pt-8 text-center"}>
            Welcome to a Network of Premium Candidates
          </div>
          <div className={"pt-4 text-xs text-gray-500 text-center"}>
            To maximize your chances of being match wtih another similar
            company, let the HR Managers learn a little more about you.
          </div>
        </div>
        <div className="flex justify-center pt-6 pb-10">
          <ButtonVouch
            backgroundColour={"VouchGreen"}
            buttonType={"square"}
            textColour={"white"}
            label={"Yes, Sign me up!"}
            disabled={false}
            onClick={onClick}
          />
        </div>

        <div className="flex justify-center items-center pt-2">
          <img
            src="./images/VouchLogo1.png"
            width="100"
            height="auto"
            className={"flex justify-center items-center py-2 px-2"}
          />
        </div>

        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
};
