import React, { useState } from "react";
import Modal from "react-modal";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { XCircleIcon, XIcon } from "@heroicons/react/outline";

import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import StandOutSkill from "../ui/StandOutSkill";
import { UPSERT_VOUCH_CANDIDATE } from "../../graphql/UPSERT_VOUCHEE_FORM";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../lib/authContext";
import { PositionFilterVouch } from "../ui/PositionFilterVouch";
import { BaseSalaryFilterVouch } from "../ui/BaseSalaryFilterVouch";
import { InformationCircleIcon } from "@heroicons/react/solid";
import {
  BaseSalaryDropdownArray,
  InterviewStageDropdownArray,
  positionCategoryDropdownArray,
  YearsOfExperienceDropdownArray,
} from "../../pages/api/dropdownCategories";
import InformationIconToolTip from "../ui/InformationIconToolTip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CTAinstructionsModal from "./VouchEmailTemplateModal";
import { dbUri } from "../../lib/apollo";
import { v4 as uuidv4 } from "uuid";
import VouchEmailTemplateModal from "./VouchEmailTemplateModal";

export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  hrData: any;
}

const VouchCTAModal = ({
  modalIsOpen,
  closeModal,
  hrData,
}: VouchCTAModalProps) => {
  const { user } = useAuth();
  const [iconModalIsOpen, setIconModalIsOpen] = useState(false);
  const [imageTemplateModalIsOpen, setImageTemplateModalIsOpen] =
    useState(false);
  //authentication passes hrID

  const [email, setEmail] = useState("");
  const [emailInputList, setEmailInputList] = useState([]);
  const [positionTitle, setPositionTitle] = useState("");
  const [interviewStage, setInterviewStage] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [standOutSkill1, setStandOutSkill1] = useState(""); // Industry Skill
  const [standOutSkill2, setStandOutSkill2] = useState(""); // Interpersonal Skill
  const [standOutSkill3, setStandOutSkill3] = useState(""); // Interview Skill
  const [yearsOfExperience, setYearsOfExperience] = useState(""); // Years of Experience Dropdown
  const [positionType, setPositionType] = useState(""); // position Type
  const [inputLines, setInputLines] = useState(0);
  const candidateUUID = uuidv4();

  const clearFormState = () => {
    setEmail("");
    setPositionTitle("");
    setSalaryRange("");
    setInterviewStage("");
    setStandOutSkill1("");
    setStandOutSkill2("");
    setStandOutSkill3("");
    setYearsOfExperience("");
    setPositionType("");
    setInputLines(0);
  };

  const setInputLineIncrease = () => {
    let nextId = 0;

    setInputLines(inputLines + 1);
    setEmailInputList([
      ...emailInputList,
      { id: inputLines, inputLine: inputLines, email: "" },
    ]);
    console.log(emailInputList);
  };

  const setInputLineReduction = (mapElement) => {
    setInputLines(inputLines - 1);
    setEmailInputList(emailInputList.filter((e) => e.id !== mapElement.id));
  };

  const setEmailInputArray = (i, elementTargetValue) => {
    const emailArrayTemp = emailInputList.slice(); //copy the array
    emailArrayTemp[i].email = elementTargetValue; //execute the manipulations
    setEmailInputList(emailArrayTemp); //set the new state
  };

  const additionalInputs = () => {
    if (inputLines >= 1) {
      return (
        <div>
          {emailInputList.map((e, i) => (
            <div>
              <ul>
                <li className="flex py-1" key={e.id}>
                  <XIcon
                    className={"w-4 h-5 hover:text-red-500 cursor-pointer"}
                    onClick={() => setInputLineReduction(e)}
                  />
                  <input
                    className="border-2 w-full pl-1 rounded text-xs"
                    id="guess"
                    type="text"
                    placeholder=" Enter Candidate Email"
                    value={e.email}
                    onChange={(e) => setEmailInputArray(i, e.target.value)}
                  ></input>
                </li>
              </ul>
            </div>
          ))}
          {inputLines < 12 ? (
            <div className={"py-1"}>
              <div
                className="flex hover:text-VouchGreen cursor-pointer py-1"
                onClick={() => setInputLineIncrease()}
              >
                <PlusCircleIcon className={"w-4 h-4 "} />
                <div className="pl-0.5 "> Add Multiple Candidates</div>
              </div>
            </div>
          ) : (
            <div className="pl-0.5 text-red-300 "> Max Candidates Added</div>
          )}
        </div>
      );
    } else {
      return (
        <div
          className="flex hover:text-VouchGreen cursor-pointer py-1"
          onClick={() => setInputLineIncrease()}
        >
          <PlusCircleIcon className={"w-4 h-4 "} />
          <div className="pl-0.5 "> Add Multiple Candidates</div>
        </div>
      );
    }
  };

  const multipleAddressFunction = () => {
    const emailList = [email];
    emailInputList
      .filter((e) => delete e.id)
      .filter((e) => delete e.inputLine) //returns array of emails
      .map((e) => emailList.push(e.email));
    return emailList.filter((e) => e.length > 0);
    //create an empty array, use a for loop or .map to iterate through and push to new array
  };
  const sendEmail = async () => {
    const res = await fetch("/api/email/vouchEmailCandidate", {
      body: JSON.stringify({
        email: multipleAddressFunction(),
        hrEmail: user.email,
        hrFirstName: hrData.hr_voucher[0].firstName,
        hrLastName: hrData.hr_voucher[0].lastName,
        companyName: hrData.hr_voucher[0].companyName,
        hrId: user.uid,
        privacyId: candidateUUID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  const toastFeedback = () => {
    toast.success("Vouch Candidate Invited! ✅", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const submitForm = async () => {
    initializeVouchCandidate_hr_voucher_metadata({
      variables: {
        objects: dataFactory(),
      },
    });
    if (hrVoucherMetaError)
      return `Submission error! ${hrVoucherMetaError.message}`;

    initializeVouchCandidate_candidate_metadata({
      variables: {
        objects: dataFactory(),
      },
    });
    if (candidatesMetaError)
      return `Submission error! ${candidatesMetaError.message}`;

    initializeVouchCandidate_candidates({
      variables: {
        objects: dataFactory(),
      },
    });
    if (candidatesError) return `Submission error! ${candidatesError.message}`;

    toastFeedback();
    sendEmail();
    clearFormState();
    closeModal();
  };

  const dataFactory = () => {
    const upsertData = [];

    multipleAddressFunction().map((e) =>
      upsertData.push({
        email: e,
        hrId: user.uid,
        positionTitle: positionTitle,
        salaryRange: salaryRange,
        stageOfInterview: interviewStage,
        standOutSkill1: standOutSkill1,
        standOutSkill2: standOutSkill2,
        standOutSkill3: standOutSkill3,
        privacyId: uuidv4(),
        yearsOfExperience: yearsOfExperience,
        positionType: positionType,
      })
    );

    return upsertData;
  };

  const [
    initializeVouchCandidate_hr_voucher_metadata,
    { data: hrVoucherMeta, error: hrVoucherMetaError },
  ] = useMutation(
    UPSERT_VOUCH_CANDIDATE,

    {
      variables: {
        objects: dataFactory(),
      },
    }
  );
  const [
    initializeVouchCandidate_candidate_metadata,
    { data: candidatesMeta, error: candidatesMetaError },
  ] = useMutation(
    UPSERT_VOUCH_CANDIDATE,

    {
      variables: {
        objects: dataFactory(),
      },
    }
  );

  const [
    initializeVouchCandidate_candidates,
    { data: candidatesData, error: candidatesError },
  ] = useMutation(
    UPSERT_VOUCH_CANDIDATE,

    {
      variables: {
        objects: dataFactory(),
      },
    }
  );
  const formValidation = () => {
    const emailValidator = email;
    const positionTitleValidator = positionTitle;
    const salaryRangeValidator = salaryRange;
    const stageOfInterviewValidator = interviewStage;
    const yearsOfExperienceValidator = yearsOfExperience;
    const positionTypeValidator = positionType;
    if (
      emailValidator &&
      positionTitleValidator &&
      salaryRangeValidator &&
      stageOfInterviewValidator &&
      positionTypeValidator &&
      yearsOfExperienceValidator
    ) {
      return false;
    } else if (emailValidator.length <= 0) {
      return true;
    }
    return true;
  };

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" w-1/4 h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute right-0"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className={"text-xs"}>
          <div className={"grid grid-cols-3"}>
            <div className={"col-span-3 px-4 text-gray-700"}>
              {" "}
              <div>
                <div className="grid justify-items-end">
                  <XIcon
                    className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <div className=" font-bold flex-nowrap flex justify-start text-sm ">
                  STEP 1: Invite a Candidate{" "}
                  <InformationCircleIcon
                    className=" text-gray-300 w-5 h-5 hover:text-VouchDark cursor-pointer"
                    onClick={() => setIconModalIsOpen(true)}
                  />
                </div>
                <div className={"flex justify-center py-2 "}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded text-xs"
                    id="guess"
                    type="text"
                    placeholder=" Enter Candidate Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div>{additionalInputs()}</div>
              </div>
              <div className="py-2">
                <hr className="" />
              </div>
              <div className="	">
                <div className="pt-2">
                  <div className="font-bold text-sm flex justify-start">
                    Step 2: Interview and Position Details
                  </div>
                  <div className="text-gray-300 flex justify-start pb-2">
                    Only HR admins in the platform will be able to view these
                    details
                  </div>
                </div>

                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded text-xs"
                    id="guess"
                    type="text"
                    placeholder=" Position Title"
                    value={positionTitle}
                    onChange={(e) => setPositionTitle(e.target.value)}
                  ></input>
                </div>
                <div className={"grid grid-cols-2 pt-2 text-gray-700"}>
                  <div className={""}>
                    <div className="pb-2">
                      <div className="text-xs py-1 font-bold text-gray-500 flex flex-nowrap">
                        Last Interview Stage
                        <InformationIconToolTip toolTipCopy="While companies have differing interview stages, please do your best to select the stage that best represents the last interview stage completed by the candidate." />
                      </div>
                      <div className={"pr-3"}>
                        <PositionFilterVouch
                          value={interviewStage}
                          backgroundColour="white"
                          onChange={(e) => {
                            setInterviewStage(e.target.value);
                          }}
                          positionDropDownArray={InterviewStageDropdownArray}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs py-1 pl-3 font-bold text-gray-500 flex flex-nowrap">
                      Base Salary Range{" "}
                      <InformationIconToolTip toolTipCopy="Select the closest base salary range that was budgeted for the position. This provides other HR professionals in the platform an idea around salary expectations of the candidate." />
                    </div>{" "}
                    <div className={"pl-3"}>
                      <BaseSalaryFilterVouch
                        value={salaryRange}
                        backgroundColour="white"
                        onChange={(e) => {
                          setSalaryRange(e.target.value);
                        }}
                        BaseSalaryDropDownArray={BaseSalaryDropdownArray}
                      />
                    </div>
                  </div>

                  <div className={""}>
                    <div className="pb-2">
                      <div className="text-xs py-1 font-bold text-gray-500 flex flex-nowrap">
                        Position Type
                        <InformationIconToolTip toolTipCopy="Select the position type the candidate interviewed for." />
                      </div>
                      <div className={"pr-3"}>
                        <PositionFilterVouch
                          value={positionType}
                          backgroundColour="white"
                          onChange={(e) => {
                            setPositionType(e.target.value);
                          }}
                          positionDropDownArray={positionCategoryDropdownArray}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs py-1 pl-3 font-bold text-gray-500 flex flex-nowrap">
                      Req Years of Exp{" "}
                      <InformationIconToolTip toolTipCopy="Select the years of experience the role requires." />
                    </div>{" "}
                    <div className={"pl-3"}>
                      <BaseSalaryFilterVouch
                        value={yearsOfExperience}
                        backgroundColour="white"
                        onChange={(e) => {
                          setYearsOfExperience(e.target.value);
                        }}
                        BaseSalaryDropDownArray={YearsOfExperienceDropdownArray}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <hr className="" />
                </div>

                <div className="py-2 flex justify-center">
                  <ButtonVouch
                    backgroundColour="VouchGreen"
                    textColour="white"
                    onClick={submitForm}
                    buttonType="rounded"
                    label="Invite Candidate!"
                    disabled={formValidation()}
                  />
                </div>
                <div className={"text-xs text-gray-300 py-2"}>
                  By clicking on “Invite Candidate”, you agree to the
                  VouchRecruit{" "}
                  <a
                    href={"https://www.vouchrecruit.com/termsandconditions"}
                    target="_blank"
                    className="text-VouchGreen"
                  >
                    Terms and Conditions.
                  </a>
                  {""}To see how we may use the information, please take a look
                  at our{" "}
                  <a
                    href="https://www.vouchrecruit.com/privacypolicy"
                    target="_blank"
                    className="text-VouchGreen"
                  >
                    Privacy Policy.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

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
        <CTAinstructionsModal
          modalIsOpen={iconModalIsOpen}
          closeModal={() => setIconModalIsOpen(false)}
        />
        <VouchEmailTemplateModal
          modalIsOpen={imageTemplateModalIsOpen}
          closeModal={() => setIconModalIsOpen(false)}
        />
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
