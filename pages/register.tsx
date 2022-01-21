import { useMutation, useQuery } from "@apollo/client";
import { getRedirectResult } from "firebase/auth";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";
import { INSERT_HR_VOUCHER } from "../graphql/INSERT_HR_VOUCHER";
import { QUERY_HRID } from "../graphql/QUERY_HRID";
import { useAuth } from "../lib/authContext";
import { auth } from "../lib/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function Register() {
  const { user } = useAuth();

  const [industryArray, setIndustryArray] = useState("");
  const [employeeArray, setEmployeeArray] = useState("");
  const [hrVoucherCompanyName, setHrVoucherCompanyName] = useState("");
  const [hrVoucherCompanyWebsite, setHrVoucherCompanyWebsite] = useState("");
  const [hrCityLocation, setHrCityLocation] = useState("");
  const [hrStateLocation, setHrStateLocation] = useState("");
  const [checkBoxValidation, setCheckBoxValidation] = useState(false);
  const [hrFirstName, setHrFirstName] = useState("");
  const [hrLastName, setHrLastName] = useState("");

  const { data: hrData } = useQuery(QUERY_HRID, {
    variables: { hrId: user.uid },
  });

  const toastFeedback = () => {
    toast.success("Form Submitted!✅", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // useEffect(() => {
  //   const hrRegister = () => {
  //     if (hrData.hr_voucher.length > 0) {
  //       router.push("/dashboard");
  //     }
  //   };
  //   hrData && hrRegister();
  // }, [hrData]);

  const [initializeRegisterHr, { data, loading, error }] = useMutation(
    INSERT_HR_VOUCHER,

    {
      variables: {
        companyName: "incompleteField",
        companyWebsite: "incompleteField",
        hrEmail: "incompleteField",
        industry: "incompleteField",
        rangeOfEmployees: "incompleteField",
        userName: "incompleteField",
        hrId: "incompleteField",
        locationState: "incompleteField",
        locationCity: "incompleteField",
        firstName: "incompleteField",
        lastName: "incompleteField",
      },
    }
  );

  const formValidator = () => {
    const employeeArrayValidator = employeeArray;
    const industryArrayValidator = industryArray;
    const hrVoucherCompanyNameValidator = hrVoucherCompanyName;
    const hrVoucherCompanyWebsiteValidator = hrVoucherCompanyWebsite;
    const hrCityLocationValidator = hrCityLocation;
    const hrStateLocationValidator = hrStateLocation;
    const hrFirstNameValidator = hrFirstName;
    const hrLastNameValidator = hrLastName;
    const checkBoxValidationValidator = checkBoxValidation;

    if (
      employeeArrayValidator &&
      hrFirstNameValidator &&
      hrLastNameValidator &&
      industryArrayValidator &&
      hrVoucherCompanyNameValidator &&
      hrVoucherCompanyWebsiteValidator &&
      hrStateLocationValidator &&
      hrCityLocationValidator &&
      checkBoxValidationValidator
    ) {
      return false;
    }
    return true;
  };

  const clearForms = () => {
    setIndustryArray("");
    setEmployeeArray("");
    setHrVoucherCompanyName("");
    setHrVoucherCompanyWebsite("");
    setHrCityLocation("");
    setHrStateLocation("");
    setCheckBoxValidation(false);
    setHrFirstName("");
    setHrLastName("");
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
        rangeOfEmployees: employeeArray,
        userName: userName,
        hrId: hrID,
        locationState: hrStateLocation,
        locationCity: hrCityLocation,
        firstName: hrFirstName,
        lastName: hrLastName,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    toastFeedback();
    clearForms();
    location.reload();
  };
  return (
    <div className={"pt-4"}>
      <Head>
        <title>Register | Vouch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {hrData && (
        <HROnboarding
          onClick={onSubmit}
          industryArray={industryArray}
          setIndustryArray={setIndustryArray}
          hrCityLocation={hrCityLocation}
          setHrCityLocation={setHrCityLocation}
          hrStateLocation={hrStateLocation}
          setHrStateLocation={setHrStateLocation}
          employeeArray={employeeArray}
          setEmployeeArray={setEmployeeArray}
          hrVoucherCompanyName={hrVoucherCompanyName}
          setHrVoucherCompanyName={setHrVoucherCompanyName}
          hrVoucherCompanyWebsite={hrVoucherCompanyWebsite}
          setHrVoucherWebsite={setHrVoucherCompanyWebsite}
          setCheckBoxValidation={setCheckBoxValidation}
          checkBoxValidation={checkBoxValidation}
          formValidation={formValidator}
          hrFirstName={hrFirstName}
          setHrFirstName={setHrFirstName}
          hrLastName={hrLastName}
          setHrLastName={setHrLastName}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}
