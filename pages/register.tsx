import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";
import SignInPage from "../components/signup";

export default function Register(props) {
  const [industrySelect, setIndustrySelect] = useState("");
  const [industryArray, setIndustryArray] = useState([
    "Select Industry",
    "Finance",
    "Gaming",
    "SaaS",
    "Space",
  ]);

  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [employeeArray, setEmployeeArray] = useState([
    "Select the number of Employees",
    "<10",
    "10-50",
    "50-100",
    "100-200",
    "200-500",
    "500+",
  ]);

  const hello = () => {};
  return (
    <div>
      <SignInPage />;
      <HROnboarding
        onClick={hello}
        industryArray={industryArray}
        setIndustryArray={setIndustryArray}
        industrySelect={industrySelect}
        setIndustrySelect={setIndustrySelect}
        numberOfEmployees={numberOfEmployees}
        setNumberOfEmployees={setNumberOfEmployees}
        employeeArray={employeeArray}
        setEmployeeArray={setEmployeeArray}
      />
      ;
    </div>
  );
}
