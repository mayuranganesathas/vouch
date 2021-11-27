import { useMutation, useQuery } from "@apollo/client";
import { getRedirectResult } from "firebase/auth";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";
import { INSERT_HR_VOUCHER } from "../graphql/INSERT_HR_VOUCHER";
import { QUERY_HRID } from "../graphql/QUERY_HRID";
import { useAuth } from "../lib/authContext";
import { auth } from "../lib/firebase";

export default function Register() {
  const { user } = useAuth();

  const [industryArray, setIndustryArray] = useState("");

  const [employeeArray, setEmployeeArray] = useState("");

  const [hrVoucherPosition, setHrVoucherPosition] = useState("");
  const [hrVoucherCompanyName, setHrVoucherCompanyName] = useState("");
  const [hrVoucherCompanyWebsite, setHrVoucherCompanyWebsite] = useState("");
  const [hrLocation, setHrLocation] = useState("");
  const [hrCompanyLogo, setHrCompanyLogo] = useState("");
  const [checkBoxValidation, setCheckBoxValidation] = useState(false);

  const { data: hrData } = useQuery(QUERY_HRID, {
    variables: { hrId: user.uid },
  });

  useEffect(() => {
    const hrRegister = () => {
      if (hrData.hr_voucher.length > 0) {
        router.push("/dashboard");
      }
    };
    hrData && hrRegister();
  }, [hrData]);

  const [initializeRegisterHr, { data, loading, error }] = useMutation(
    INSERT_HR_VOUCHER,

    {
      variables: {
        companyName: "incompleteField",
        companyWebsite: "incompleteField",
        hrEmail: "incompleteField",
        industry: "incompleteField",
        numberOfEmployees: "incompleteField",
        position: "incompleteField",
        userName: "incompleteField",
        hrId: "incompleteField",
        companyLogoAddress: "incompleteField",
        companyWebsite1: "incompleteField",
        corporateName: "incompleteField",
        location: "incompleteField",
        numberOfEmployees1: "incompleteField",
        hrId1: "incompleteField",
      },
    }
  );

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

  const clearForms = () => {
    setIndustryArray("");
    setEmployeeArray("");
    setHrVoucherPosition("");
    setHrVoucherCompanyName("");
    setHrVoucherCompanyWebsite("");
    setHrLocation("");
    setHrCompanyLogo("");
    setCheckBoxValidation(false);
  };

  const onSubmit = () => {
    const hrID = user.uid;
    const hrEmail = user.email;
    const userName = user.displayName;

    initializeRegisterHr({
      variables: {
        companyName: hrVoucherCompanyName,
        companyWebsite: hrVoucherCompanyWebsite,
        hrEmail: hrEmail,
        industry: industryArray,
        numberOfEmployees: employeeArray,
        position: hrVoucherPosition,
        userName: userName,
        hrId: hrID,
        companyLogoAddress: hrCompanyLogo,
        companyWebsite1: hrVoucherCompanyWebsite,
        corporateName: hrVoucherCompanyName,
        location: hrLocation,
        numberOfEmployees1: employeeArray,
        hrId1: hrID,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`; //post to BE

    clearForms();
    setTimeout(() => router.push("/dashboard"), 1000);
  };
  return (
    <div>
      {hrData && (
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
      )}
    </div>
  );
}
