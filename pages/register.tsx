import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";

export default function Register() {
  //CALL AUTH USER EMAIL TO PASS INTO UPSERT

  const [industryArray, setIndustryArray] = useState("");

  const [employeeArray, setEmployeeArray] = useState("");

  const [hrVoucherPosition, setHrVoucherPosition] = useState("");
  const [hrVoucherCompanyName, setHrVoucherCompanyName] = useState("");
  const [hrVoucherCompanyWebsite, setHrVoucherCompanyWebsite] = useState("");
  const [hrLocation, setHrLocation] = useState("");
  const [hrCompanyLogo, setHrCompanyLogo] = useState("");
  const [checkBoxValidation, setCheckBoxValidation] = useState(false);
  const [formValidation, setFormValidation] = useState(false);
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

  const formValidator = () => {
    const employeeArrayValidator = employeeArray;
    const industryArrayValidator = industryArray;
    const hrVoucherPositionValidator = hrVoucherPosition;
    const hrVoucherCompanyNameValidator = hrVoucherCompanyName;
    const hrVoucherCompanyWebsiteValidator = hrVoucherCompanyWebsite;
    const hrLocationValidator = hrLocation;
    //const hrCompanyLogoValidator = hrCompanyLogo;
    const checkBoxValidationValidator = checkBoxValidation;

    if (
      employeeArrayValidator &&
      industryArrayValidator &&
      hrVoucherPositionValidator &&
      hrVoucherCompanyNameValidator &&
      hrVoucherCompanyWebsiteValidator &&
      hrLocationValidator &&
      // hrCompanyLogoValidator &&
      checkBoxValidationValidator
    ) {
      return false;
    }
    return true;
  };
  const onSubmit = () => {
    //Form Validation
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
        hrLocation={hrLocation}
        setHrLocation={setHrLocation}
        employeeArray={employeeArray}
        setEmployeeArray={setEmployeeArray}
        hrVoucherPosition={hrVoucherPosition}
        setHrVoucherPosition={setHrVoucherPosition}
        hrVoucherCompanyName={hrVoucherCompanyName}
        setHrVoucherCompanyName={setHrVoucherCompanyName}
        hrVoucherCompanyWebsite={hrVoucherCompanyWebsite}
        setHrVoucherWebsite={setHrVoucherCompanyWebsite}
        hrCompanyLogo={hrCompanyLogo}
        setHrCompanyLogo={setHrCompanyLogo}
        setCheckBoxValidation={setCheckBoxValidation}
        checkBoxValidation={checkBoxValidation}
        formValidation={formValidator}
      />
      ;
    </div>
  );
}
