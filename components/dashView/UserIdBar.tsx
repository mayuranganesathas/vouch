import React from "react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import HrCompanyProfile from "./HrCompanyProfile";
import { useAuth } from "../../lib/authContext";
import { ButtonNav } from "../ui/ButtonNav";
import { ViewListIcon } from "@heroicons/react/solid";

export interface UserIdBarProps {
  hrData: any;
  stageStatus: string;
  setStageStatus: (stageStatus: string) => void;
  queryUpdateOnClick: () => void;
}
const UserIdBar = ({
  hrData,
  stageStatus,
  setStageStatus,
  queryUpdateOnClick,
}: UserIdBarProps) => {
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
    queryUpdateOnClick;
  };

  const favoritesClick = () => {
    setFavoritesCheck(true);
    setHomeCheck(false);
    setUnfitCheck(false);
    setContactedCheck(false);
    setStageStatus("Favorites");
    queryUpdateOnClick;
  };

  const unfitClick = () => {
    setUnfitCheck(true);
    setHomeCheck(false);
    setFavoritesCheck(false);
    setContactedCheck(false);
    setStageStatus("Unfit");
    queryUpdateOnClick;
  };

  const contactedClick = () => {
    setContactedCheck(true);
    setUnfitCheck(false);
    setHomeCheck(false);
    setFavoritesCheck(false);
    setStageStatus("Contacted");
    queryUpdateOnClick;
  };

  return (
    hrData.hr_voucher.length > 0 && (
      <div className={"grid grid-cols-12"}>
        <div className={"col-start-1 col-span-4"}>
          <div className="flex px-2 justify-between">
            <HrCompanyProfile
              userHrCompanyName={hrData.hr_voucher[0].companyName}
              userHrCompanyWebsite={hrData.hr_voucher[0].companyWebsite}
            />
          </div>
        </div>
        <div className={"col-start-8 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={homeCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={homeCheck ? "textBlack" : "black"}
            label={"Home"}
            onClick={homeClick}
            icon={"Home"}
            buttonWidth={"wide"}
          />
        </div>
        <div className={"col-start-9 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={favoritesCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={favoritesCheck ? "textBlack" : "black"}
            label={"Favorites"}
            onClick={favoritesClick}
            icon={"Favorites"}
            buttonWidth={"wide"}
          />
        </div>
        <div className={"col-start-10 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={unfitCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={unfitCheck ? "textBlack" : "black"}
            label={"Hidden"}
            onClick={unfitClick}
            icon={"NotNow"}
            buttonWidth={"wide"}
          />
        </div>
        <div className={"col-start-11 flex justify-center items-center"}>
          <ButtonNav
            backgroundColour={contactedCheck ? "gray" : "white"}
            buttonType={"square"}
            textColour={contactedCheck ? "textBlack" : "black"}
            label={"Contacted"}
            onClick={contactedClick}
            icon={"Contacted"}
            buttonWidth={"wide"}
          />
        </div>

        <div className={"col-start-13 col-span-2 flex items-center"}>
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
