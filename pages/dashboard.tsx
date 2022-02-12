import React, { useEffect } from "react";
import { useState } from "react";
import VouchCTA from "../components/dashView/VouchCTA";
import { CandidateCount } from "../components/dashView/CandidateCount";
import DashCandidateTiles from "../components/dashView/DashCandidateTiles";
import UserIdBar from "../components/dashView/UserIdBar";
import { useQuery } from "@apollo/client";
import { QUERY_DASHBOARD_TILES } from "../graphql/QUERY_DASHBOARD_TILES";
import { useAuth } from "../lib/authContext";
import { QUERY_HRID } from "../graphql/QUERY_HRID";
import router from "next/router";
import { DashboardCategoryFilter } from "../components/ui/DashboardCategoryFilter";
import InformationIconToolTip from "../components/ui/InformationIconToolTip";
import { QUERY_SHORT_LIST } from "../graphql/QUERY_SHORTLIST";
import DashCandidateTilesShortList from "../components/dashView/DashCandidateTilesShortList";
import {
  positionCategoryDropdownArray,
  SeniorityDropdownArray,
  stateProvinceDropdownArray,
} from "./api/dropdownCategories";
import Head from "next/head";
import { HomeDashboard } from "../components/dashView/Home";
import { FavoritesDashboard } from "../components/dashView/Favorites";
import { HiddenDashboard } from "../components/dashView/Hidden";
import { ContactedDashboard } from "../components/dashView/Contacted";

export interface DashboardProps {}

const DashBoard = ({}: DashboardProps) => {
  const [stageStatus, setStageStatus] = useState("Home");

  const { user } = useAuth();
  const [locationStateDropdown, setLocationStateDropdown] = useState("empty");
  const [jobCategoryDropdown, setJobCategoryDropdown] = useState("empty");

  const [seniorityDropdown, setSeniorityDropdown] = useState("empty");
  const [existingCandidates, setExistingCandidates] = useState();
  const [shortListExistingCandidates, setShortListExistingCandidates] =
    useState(0);
  const [clearFilter, setClearFilter] = useState(false);

  let {
    loading,
    data: ShortList,
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

  const getTileComponent = () => {
    if (stageStatus == "Home") {
      return (
        <div>
          <HomeDashboard
            hrData={hrData}
            positionCategoryDropdownArray={positionCategoryDropdownArray}
            existingCandidates={existingCandidates}
            setExistingCandidates={setExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            jobCategoryDropdown={jobCategoryDropdown}
            filterChangeCategory={filterChangeCategory}
            seniorityDropdown={seniorityDropdown}
            filterChangeSeniority={filterChangeSeniority}
            locationStateDropdown={locationStateDropdown}
            filterChangeLocation={filterChangeLocation}
            data={MainDashData}
            refetchShortList={refetchShortList}
            seniorityDropdownArray={SeniorityDropdownArray}
            stateProvinceDropdownArray={stateProvinceDropdownArray}
          />
        </div>
      );
    } else if (stageStatus == "Favorites") {
      return (
        <div>
          <FavoritesDashboard
            hrData={hrData}
            positionCategoryDropdownArray={positionCategoryDropdownArray}
            shortListExistingCandidates={shortListExistingCandidates}
            setShortListExistingCandidates={setShortListExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            jobCategoryDropdown={jobCategoryDropdown}
            filterChangeCategory={filterChangeCategory}
            seniorityDropdown={seniorityDropdown}
            filterChangeSeniority={filterChangeSeniority}
            locationStateDropdown={locationStateDropdown}
            filterChangeLocation={filterChangeLocation}
            stageStatus={stageStatus}
            shortListData={ShortList}
            refetchShortList={refetchShortList}
            seniorityDropdownArray={SeniorityDropdownArray}
            stateProvinceDropdownArray={stateProvinceDropdownArray}
          />
        </div>
      );
    } else if (stageStatus == "Unfit") {
      return (
        <div>
          <HiddenDashboard
            hrData={hrData}
            positionCategoryDropdownArray={positionCategoryDropdownArray}
            shortListExistingCandidates={shortListExistingCandidates}
            setShortListExistingCandidates={setShortListExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            jobCategoryDropdown={jobCategoryDropdown}
            filterChangeCategory={filterChangeCategory}
            seniorityDropdown={seniorityDropdown}
            filterChangeSeniority={filterChangeSeniority}
            locationStateDropdown={locationStateDropdown}
            filterChangeLocation={filterChangeLocation}
            stageStatus={stageStatus}
            shortListData={ShortList}
            refetchShortList={refetchShortList}
            seniorityDropdownArray={SeniorityDropdownArray}
            stateProvinceDropdownArray={stateProvinceDropdownArray}
          />
        </div>
      );
    } else if (stageStatus == "Contacted") {
      return (
        <div>
          <ContactedDashboard
            hrData={hrData}
            positionCategoryDropdownArray={positionCategoryDropdownArray}
            shortListExistingCandidates={shortListExistingCandidates}
            setShortListExistingCandidates={setShortListExistingCandidates}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
            jobCategoryDropdown={jobCategoryDropdown}
            filterChangeCategory={filterChangeCategory}
            seniorityDropdown={seniorityDropdown}
            filterChangeSeniority={filterChangeSeniority}
            locationStateDropdown={locationStateDropdown}
            filterChangeLocation={filterChangeLocation}
            stageStatus={stageStatus}
            shortListData={ShortList}
            refetchShortList={refetchShortList}
            seniorityDropdownArray={SeniorityDropdownArray}
            stateProvinceDropdownArray={stateProvinceDropdownArray}
          />
        </div>
      );
    }
  };

  const { data: hrData } = useQuery(QUERY_HRID, {
    variables: { hrId: user.uid },
  });

  const clearFilters = () => {
    setSeniorityDropdown("empty");
    setJobCategoryDropdown("empty");
    setLocationStateDropdown("empty");
    setClearFilter(false);
  };

  const filterChangeLocation = (e) => {
    setLocationStateDropdown(e.target.value);
    setClearFilter(true);
  };
  const filterChangeCategory = (e) => {
    setJobCategoryDropdown(e.target.value);
    setClearFilter(true);
  };
  const filterChangeSeniority = (e) => {
    setSeniorityDropdown(e.target.value);
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
