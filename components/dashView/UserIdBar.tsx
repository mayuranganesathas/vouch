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
  beaconHome: boolean;
  setBeaconHome: (beaconHome: boolean) => void;

  beaconFavorites: boolean;
  setBeaconFavorites: (beaconFavorites: boolean) => void;
  beaconHidden: boolean;
  setBeaconHidden: (beaconHidden: boolean) => void;
  beaconContacted: boolean;
  setBeaconContacted: (beaconContacted: boolean) => void;
  setStageStatus: (stageStatus: string) => void;
  queryUpdateOnClick: () => void;
  clearFilters: () => void;
}
const UserIdBar = ({
  hrData,
  stageStatus,
  beaconHome,
  setBeaconHome,
  beaconHidden,
  setBeaconHidden,
  beaconFavorites,
  setBeaconFavorites,
  beaconContacted,
  setBeaconContacted,
  setStageStatus,
  queryUpdateOnClick,
  clearFilters,
}: UserIdBarProps) => {
  const { user } = useAuth();

  const [homeCheck, setHomeCheck] = useState(true);
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
    clearFilters();
    setBeaconHome(false);
  };

  const favoritesClick = () => {
    setFavoritesCheck(true);
    setHomeCheck(false);
    setUnfitCheck(false);
    setContactedCheck(false);
    setStageStatus("Favorites");
    queryUpdateOnClick;
    clearFilters();
    setBeaconFavorites(false);
  };

  const unfitClick = () => {
    setUnfitCheck(true);
    setHomeCheck(false);
    setFavoritesCheck(false);
    setContactedCheck(false);
    setStageStatus("Unfit");
    queryUpdateOnClick;
    clearFilters();
    setBeaconHidden(false);
  };

  const contactedClick = () => {
    setContactedCheck(true);
    setUnfitCheck(false);
    setHomeCheck(false);
    setFavoritesCheck(false);
    setStageStatus("Contacted");
    queryUpdateOnClick;
    clearFilters();
    setBeaconContacted(false);
  };

  return (
    hrData.hr_voucher.length > 0 && (
      <div className={"grid grid-cols-12"}>
        <div className={"col-start-1 col-span-4"}>
          <div className="flex px-2 justify-between ">
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
            beacon={beaconHome}
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
            beacon={beaconFavorites}
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
            beacon={beaconHidden}
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
            beacon={beaconContacted}
          />
        </div>

        <div className={"col-start-13 col-span-2 flex items-center"}>
          <UserProfile
            userHrFirstName={hrData.hr_voucher[0].firstName}
            userHrLastName={hrData.hr_voucher[0].lastName}
          />
        </div>
      </div>
    )
  );
};

export default UserIdBar;
