import React from "react";
import { ButtonVouch } from "../ui/ButtonVouch";

export interface HROnboardingProps {
  onClick: () => void;
}

export const HROnboarding: React.FC<HROnboardingProps> = ({ onClick }) => {
  return (
    <div className={"flex justify-center items-center"}>
      <div className={"px-8 shadow-lg rounded-xl w-3/5 h-auto bg-white"}>
        <div className={"pt-8 text-left"}>Set up your Company Profile</div>
        <div className={"border-b-2 border-gray-300 py-2"}> </div>
        <div className={"pt-2 text-xs text-left"}>
          Thank you for joining vouch. In order to properly match referred
          candidates, we need a little information about your company. You and
          other HR Managers will be able to see candidate details as well as the
          company details where they were referred from to help you qualify the
          candidates.
        </div>
        <div className="flex justify-center py-4">
          <ButtonVouch
            backgroundColour={"VouchGreen"}
            buttonType={"rounded"}
            textColour={"white"}
            label={"Yes, Sign me up!"}
            disabled={false}
            onClick={onClick}
          />
        </div>

        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
};
