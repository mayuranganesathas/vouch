import React from "react";
import { SearchFilterDash } from "./searchFilterDash";

const JobTypeDashFilterData = {
  backgroundColour: "white",
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
        backgroundColour={JobTypeDashFilterData.backgroundColour}
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
