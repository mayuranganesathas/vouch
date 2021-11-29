import React from "react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import HrCompanyProfile from "./HrCompanyProfile";
import { useAuth } from "../../lib/authContext";
import { ButtonNav } from "../ui/ButtonNav";

export interface UserIdBarProps {
  hrData: any;
  stageStatus: string;
  setStageStatus: (stageStatus: string) => void;
}
const UserIdBar = ({ hrData, stageStatus, setStageStatus }: UserIdBarProps) => {
  const { user } = useAuth();

  const [homeCheck, setHomeCheck] = useState(false);
  const [favoritesCheck, setFavoritesCheck] = useState(false);
  const [unfitCheck, setUnfitCheck] = useState(false);
  const [contactedCheck, setContactedCheck] = useState(false);

  const homeClick = () => {
    setHomeCheck(true);
    setFavoritesCheck(false);
    setUnfitCheck(false);
    setContactedCheck(false);
    setStageStatus("Home");
  };

  const favoritesClick = () => {
    setFavoritesCheck(true);
    setHomeCheck(false);
    setUnfitCheck(false);
    setContactedCheck(false);
    setStageStatus("Favorites");
  };

  const unfitClick = () => {
    setUnfitCheck(true);
    setHomeCheck(false);
    setFavoritesCheck(false);
    setContactedCheck(false);
    setStageStatus("Unfit");
  };

  const contactedClick = () => {
    setContactedCheck(true);
    setUnfitCheck(false);
    setHomeCheck(false);
    setFavoritesCheck(false);
    setStageStatus("Contacted");
  };

  return (
    hrData.hr_voucher.length > 0 && (
      <div className={"grid grid-cols-12"}>
        <div className={"col-start-1 col-span-2"}>
          <div className="flex px-2 justify-between">
            <HrCompanyProfile
              userHrCompanyName={hrData.hr_voucher[0].companyName}
              userHrCompanyImage={hrData.company_data[0].companyLogoAddress}
              userHrCompanyIndustry={hrData.hr_voucher[0].industry}
              userHrCompanyWebsite={hrData.hr_voucher[0].companyWebsite}
              userHrCompanyLocation={hrData.hr_voucher[0].location}
            />
          </div>
        </div>
        <div className={"col-start-4 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={homeCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={homeCheck ? "VouchGreen" : "black"}
            label={"Home"}
            onClick={homeClick}
          />
        </div>
        <div className={"col-start-5 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={favoritesCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={favoritesCheck ? "VouchGreen" : "black"}
            label={"Favorites"}
            onClick={favoritesClick}
          />
        </div>
        <div className={"col-start-6 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={unfitCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={unfitCheck ? "VouchGreen" : "black"}
            label={"Unfit"}
            onClick={unfitClick}
          />
        </div>
        <div className={"col-start-7 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={contactedCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={contactedCheck ? "VouchGreen" : "black"}
            label={"Contacted"}
            onClick={contactedClick}
          />
        </div>

        <div className={"col-start-11 col-span-2"}>
          <UserProfile
            userHrImg={user.photoURL}
            userHrName={user.displayName}
            userHrPosition={hrData.hr_voucher[0].position}
          />
        </div>
      </div>
    )
  );
};

export default UserIdBar;
