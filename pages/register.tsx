import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";

export default function Register(props) {
  //CALL AUTH USER EMAIL TO PASS INTO UPSERT

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

  useEffect(() => {
    //  async function checkAuth() {
    //    const result = await getRedirectResult(auth);
    //    if (result) {
    //      router.push("/register");
    //    }
    //  }
    //  checkAuth();
    //CHECK IF REGISTERED ACCOUNT!!!! if REGISTERED -> ROUTE TO DASHBOARD, IF NOT STAY ON REGISTER PAGE
  }, []);

  const onSubmit = () => {
    //QUERY TO UPSERT ON SUBMIT
    //post to BE
    //CLEAR FORMS
  };
  return (
    <div>
      <HROnboarding
        onClick={onSubmit}
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
