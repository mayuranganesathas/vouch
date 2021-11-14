import React from "react";
import { SearchFilterDash } from "./searchFilterDash";

const JobTypeDashFilterData = {
  backgroundColour: "white",
  dropDownArray: ["FrontEnd Dev", "BackEnd Dev", "Product Mgt", "Design"],
};

export interface JobTypeDashFilterProps {
  filterJob: string;
  setFilterJob: (filterJob: string)=> void;
}

const JobTypeDashFilter = () => {
  return (
    <div>
      <SearchFilterDash
        backgroundColour={JobTypeDashFilterData.backgroundColour}
        dropDownArray={JobTypeDashFilterData.dropDownArray}
        value="hi"
        onChange={(e) => {
          e.target.value;
        }}
      />
    </div>
  );
};

export default JobTypeDashFilter;
