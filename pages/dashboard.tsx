import React, { useEffect } from "react";
import { useState } from "react";

import UserIdBar from "../components/dashView/UserIdBar";
import { useQuery } from "@apollo/client";
import { QUERY_DASHBOARD_TILES } from "../graphql/QUERY_DASHBOARD_TILES";
import { useAuth } from "../lib/authContext";
import { QUERY_HRID } from "../graphql/QUERY_HRID";
import router from "next/router";
import { QUERY_SHORT_LIST } from "../graphql/QUERY_SHORTLIST";
import {
  positionCategoryDropdownArray,
  stateProvinceDropdownArray,
  YearsOfExperienceDropdownArray,
} from "./api/dropdownCategories";
import Head from "next/head";
import { HomeDashboard } from "../components/dashView/Home";
import { FavoritesDashboard } from "../components/dashView/Favorites";
import { HiddenDashboard } from "../components/dashView/Hidden";
import { ContactedDashboard } from "../components/dashView/Contacted";
import { QUERY_ANON } from "../graphql/QUERY_ANON_ONHRID";

export interface DashboardProps {}

const DashBoard = ({}: DashboardProps) => {
  const [stageStatus, setStageStatus] = useState("Home");
  const { user } = useAuth();
  const [candidateLocationFilterDropdown, setCandidateLocationFilterDropdown] =
    useState("empty");
  const [positionTypeFilterDropdown, setPositionTypeFilterDropdown] =
    useState("empty");
  const [yearsOfExperienceFilterDropdown, setYearsOfExperienceFilterDropdown] =
    useState("empty");
  const [existingCandidates, setExistingCandidates] = useState();
  const [shortListExistingCandidates, setShortListExistingCandidates] =
    useState(0);
  const [clearFilter, setClearFilter] = useState(false);

  const [beaconHome, setBeaconHome] = useState(false);
  const [beaconFavorites, setBeaconFavorites] = useState(false);
  const [beaconHidden, setBeaconHidden] = useState(false);
  const [beaconContacted, setBeaconContacted] = useState(false);

  let {
    loading,
    data: ShortListData,
    refetch: refetchShortList,
  } = useQuery(QUERY_SHORT_LIST, {
    variables: {
      hrId: user.uid,
    },
  });
  const { data: MainDashData } = useQuery(QUERY_DASHBOARD_TILES, {
    variables: {
      hrId: user.uid,
    },
  });

  const { data: AnonData, refetch: refetchAnonData } = useQuery(QUERY_ANON, {
    variables: {
      hrId: user.uid,
    },
  });

  const { data: hrData } = useQuery(QUERY_HRID, {
    variables: { hrId: user.uid },
  });

  const getTileComponent = () => {
    if (stageStatus == "Home") {
      return (
        <div>
          <HomeDashboard
            hrData={hrData}
            existingCandidates={existingCandidates}
            setExistingCandidates={setExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            candidateLocationFilterDropdown={candidateLocationFilterDropdown}
            filterChangeLocationDropdown={filterChangeLocationDropdown}
            positionTypeFilterDropdown={positionTypeFilterDropdown}
            filterChangePositionType={filterChangePositionType}
            yearsOfExperienceFilterDropdown={yearsOfExperienceFilterDropdown}
            filterChangeYearsOfExperience={filterChangeYearsOfExperience}
            data={MainDashData}
            refetchShortList={refetchShortList}
            positionCategoryDropdownList={positionCategoryDropdownArray}
            yearsOfExperienceDropdownList={YearsOfExperienceDropdownArray}
            stateProvinceDropdownList={stateProvinceDropdownArray}
            anonData={AnonData}
            refetchAnonData={refetchAnonData}
            beacon={beaconHome}
            setBeacon={setBeaconHome}
          />
        </div>
      );
    } else if (stageStatus == "Favorites") {
      return (
        <div>
          <FavoritesDashboard
            hrData={hrData}
            shortListExistingCandidates={shortListExistingCandidates}
            setShortListExistingCandidates={setShortListExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            candidateLocationFilterDropdown={candidateLocationFilterDropdown}
            filterChangeLocationDropdown={filterChangeLocationDropdown}
            positionTypeFilterDropdown={positionTypeFilterDropdown}
            filterChangePositionType={filterChangePositionType}
            yearsOfExperienceFilterDropdown={yearsOfExperienceFilterDropdown}
            filterChangeYearsOfExperience={filterChangeYearsOfExperience}
            stageStatus={stageStatus}
            shortListData={ShortListData}
            refetchShortList={refetchShortList}
            positionCategoryDropdownList={positionCategoryDropdownArray}
            yearsOfExperienceDropdownList={YearsOfExperienceDropdownArray}
            stateProvinceDropdownList={stateProvinceDropdownArray}
            anonData={AnonData}
            refetchAnonData={refetchAnonData}
            beacon={beaconFavorites}
            setBeacon={setBeaconFavorites}
          />
        </div>
      );
    } else if (stageStatus == "Unfit") {
      return (
        <div>
          <HiddenDashboard
            hrData={hrData}
            shortListExistingCandidates={shortListExistingCandidates}
            setShortListExistingCandidates={setShortListExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            candidateLocationFilterDropdown={candidateLocationFilterDropdown}
            filterChangeLocationDropdown={filterChangeLocationDropdown}
            positionTypeFilterDropdown={positionTypeFilterDropdown}
            filterChangePositionType={filterChangePositionType}
            yearsOfExperienceFilterDropdown={yearsOfExperienceFilterDropdown}
            filterChangeYearsOfExperience={filterChangeYearsOfExperience}
            stageStatus={stageStatus}
            shortListData={ShortListData}
            refetchShortList={refetchShortList}
            positionCategoryDropdownList={positionCategoryDropdownArray}
            yearsOfExperienceDropdownList={YearsOfExperienceDropdownArray}
            stateProvinceDropdownList={stateProvinceDropdownArray}
            anonData={AnonData}
            refetchAnonData={refetchAnonData}
            beacon={beaconHidden}
            setBeacon={setBeaconHidden}
          />
        </div>
      );
    } else if (stageStatus == "Contacted") {
      return (
        <div>
          <ContactedDashboard
            hrData={hrData}
            shortListExistingCandidates={shortListExistingCandidates}
            setShortListExistingCandidates={setShortListExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            candidateLocationFilterDropdown={candidateLocationFilterDropdown}
            filterChangeLocationDropdown={filterChangeLocationDropdown}
            positionTypeFilterDropdown={positionTypeFilterDropdown}
            filterChangePositionType={filterChangePositionType}
            yearsOfExperienceFilterDropdown={yearsOfExperienceFilterDropdown}
            filterChangeYearsOfExperience={filterChangeYearsOfExperience}
            stageStatus={stageStatus}
            shortListData={ShortListData}
            refetchShortList={refetchShortList}
            positionCategoryDropdownList={positionCategoryDropdownArray}
            yearsOfExperienceDropdownList={YearsOfExperienceDropdownArray}
            stateProvinceDropdownList={stateProvinceDropdownArray}
            anonData={AnonData}
            refetchAnonData={refetchAnonData}
            beacon={beaconContacted}
            setBeacon={setBeaconContacted}
          />
        </div>
      );
    }
  };

  const clearFilters = () => {
    setCandidateLocationFilterDropdown("empty");
    setPositionTypeFilterDropdown("empty");
    setYearsOfExperienceFilterDropdown("empty");
    setClearFilter(false);
  };

  const filterChangeLocationDropdown = (e) => {
    setCandidateLocationFilterDropdown(e.target.value);
    setClearFilter(true);
  };
  const filterChangePositionType = (e) => {
    setPositionTypeFilterDropdown(e.target.value);
    setClearFilter(true);
  };
  const filterChangeYearsOfExperience = (e) => {
    setYearsOfExperienceFilterDropdown(e.target.value);
    setClearFilter(true);
  };

  useEffect(() => {
    const hrRegister = () => {
      if (hrData.hr_voucher.length <= 0) {
        router.push("/register");
      }
    };
    hrData && hrRegister();
  }, [hrData]);

  return (
    <div>
      <Head>
        <title>Dashboard | Vouch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {hrData && (
        <div className={"text-xs text-gray-700"}>
          <div className={"pt-4 px-20"}>
            <UserIdBar
              hrData={hrData}
              stageStatus={stageStatus}
              setStageStatus={setStageStatus}
              queryUpdateOnClick={refetchShortList}
              clearFilters={clearFilters}
              beaconHome={beaconHome}
              setBeaconHome={setBeaconHome}
              beaconFavorites={beaconFavorites}
              setBeaconFavorites={setBeaconFavorites}
              beaconHidden={beaconHidden}
              setBeaconHidden={setBeaconHidden}
              beaconContacted={beaconContacted}
              setBeaconContacted={setBeaconContacted}
            />
          </div>
          <div className={"w-full border-gray-500 border-b-2"}></div>

          <div className={""}>{getTileComponent()}</div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;

DashBoard.auth = true;
