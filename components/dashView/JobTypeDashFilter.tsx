import React from "react";
import { SearchFilterDash } from "../ui/searchFilterDash";

const JobTypeDashFilterData = {
  dropDownArray: ["FrontEnd Dev", "BackEnd Dev", "Product Mgt", "Design"],
};

export interface JobTypeDashFilterProps {
  filterJob: string;
  setFilterJob: (filterJob: string) => void;
}

const JobTypeDashFilter = ({
  filterJob,
  setFilterJob,
}: JobTypeDashFilterProps) => {
  return (
    <div>
      <SearchFilterDash
        backgroundColour="white"
        dropDownArray={JobTypeDashFilterData.dropDownArray}
        value={filterJob}
        onChange={(e) => {
          setFilterJob(e.target.value);
        }}
      />
    </div>
  );
};

export default JobTypeDashFilter;
