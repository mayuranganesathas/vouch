import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";

export default function Register(props) {
  //CALL AUTH USER EMAIL TO PASS INTO UPSERT

  const [industryArray, setIndustryArray] = useState([
    "Select Industry",
    "Finance",
    "Gaming",
    "SaaS",
    "Space",
  ]);

  const [employeeArray, setEmployeeArray] = useState([
    "Select the number of Employees",
    "<10",
    "10-50",
    "50-100",
    "100-200",
    "200-500",
    "500+",
  ]);

  const [hrVoucherPosition, setHrVoucherPosition] = useState("");
  const [hrVoucherCompanyName, setHrVoucherCompanyName] = useState("");
  const [hrVoucherCompanyWebsite, setHrVoucherCompanyWebsite] = useState("");
  //hrID from google
  //hrEmail from google

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
        employeeArray={employeeArray}
        setEmployeeArray={setEmployeeArray}
        hrVoucherPosition={hrVoucherPosition}
        setHrVoucherPosition={setHrVoucherPosition}
        hrVoucherCompanyName={hrVoucherCompanyName}
        setHrVoucherCompanyName={setHrVoucherCompanyWebsite}
        hrVoucherCompanyWebsite={hrVoucherCompanyWebsite}
        setHrVoucherWebsite={setHrVoucherCompanyWebsite}
      />
      ;
    </div>
  );
}
