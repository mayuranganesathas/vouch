import React, { useState } from "react";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import StandOutSkill from "../ui/StandOutSkill";
import { UPSERT_VOUCH_CANDIDATE } from "../../graphql/UPSERT_VOUCHEE_FORM";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../lib/authContext";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { PositionFilterVouch } from "../ui/PositionFilterVouch";

// ref http://reactcommunity.org/react-modal/
//ref https://github.com/tailwindlabs/heroicons
export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}
//TODO

// **Auth
//PASSING HRID AUTHENTICATION

//** UX */
//EMAIL INPUT VALIDATOR

const VouchCTAModal = ({ modalIsOpen, closeModal }: VouchCTAModalProps) => {
  const { user } = useAuth();

  const positionDropDownArray = [
    "Front-End Dev",
    "Back-End Dev",
    "Software Eng",
    "Quality Assurance",
    "Customer Success",
    "Sales/BD",
    "Marketing",
    "Account Mgmt.",
    "Product Mangement",
    "Data Analysis/Science",
    "Design-UX/UI",
  ];
  //authentication passes hrID
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [interviewStage, setInterviewStage] = useState("");
  const [positionLevel, setPositionLevel] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [standOutSkill1, setStandOutSkill1] = useState("");
  const [standOutSkill2, setStandOutSkill2] = useState("");
  const [standOutSkill3, setStandOutSkill3] = useState("");
  const [standOutSkill4, setStandOutSkill4] = useState("");
  const [standOutSkill5, setStandOutSkill5] = useState("");

  const clearFormState = () => {
    setEmail("");
    setPositionTitle("");
    setPositionLevel("");
    setSalaryRange("");
    setInterviewStage("");
    setStandOutSkill1("");
    setStandOutSkill2("");
    setStandOutSkill3("");
    setStandOutSkill4("");
    setStandOutSkill5("");
  };

  //replace with HR authentication

  const [initializeVouchCandidate, { data, loading, error }] = useMutation(
    UPSERT_VOUCH_CANDIDATE,

    {
      variables: {
        hrId: "incompleteForm",
        positionLevel: "incompleteField",
        positionTitle: "incompleteField",
        salaryRange: "incompleteField",
        stageOfInterview: "incompleteField",
        standOutSkill1: "incompleteField",
        standOutSkill2: "incompleteField",
        standOutSkill3: "incompleteField",
        standOutSkill4: "incompleteField",
        standOutSkill5: "incompleteField",
        hrId1: "incompleteField",
        hrId2: "incompleteField",
      },
    }
  );
  // insert hrID in candidates and
  const emailChecker = (e) => {
    setEmail(e);
  };

  const positionChecker = (e) => {
    setPosition(e);
  };

  const sendEmail = async () => {
    const res = await fetch("/api/vouchEmailCandidate", {
      body: JSON.stringify({
        email: email,
        hrId: user.uid,
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
    console.log(email);
  };

  const submitForm = async () => {
    initializeVouchCandidate({
      variables: {
        hrId: user.uid,
        positionLevel: positionLevel,
        positionTitle: positionTitle,
        salaryRange: salaryRange,
        stageOfInterview: interviewStage,
        standOutSkill1: standOutSkill1,
        standOutSkill2: standOutSkill2,
        standOutSkill3: standOutSkill3,
        standOutSkill4: standOutSkill4,
        standOutSkill5: standOutSkill5,
        hrId1: user.uid,
        hrId2: user.uid,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;

    sendEmail();
    clearFormState();
    closeModal();
  };

  const formValidation = () => {
    const emailValidator = email;
    const positionLevelValidator = positionLevel;
    const positionTitleValidator = positionTitle;
    const salaryRangeValidator = salaryRange;
    const stageOfInterviewValidator = interviewStage;
    const standOutSkill1Validator = standOutSkill1;
    const standOutSkill2Validator = standOutSkill2;

    const standOutSkill3Validator = standOutSkill3;

    const standOutSkill4Validator = standOutSkill4;

    const standOutSkill5Validator = standOutSkill5;

    if (
      positionLevelValidator &&
      (standOutSkill1Validator ||
        standOutSkill2Validator ||
        standOutSkill3Validator ||
        standOutSkill4Validator ||
        standOutSkill5Validator) &&
      emailValidator &&
      positionTitleValidator &&
      salaryRangeValidator &&
      stageOfInterviewValidator
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
        className=" w-fit h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute right-0"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className={""}>
          <div className={"grid grid-cols-5"}>
            <div
              className={
                "col-span-2 grid grid-rows-1 py-8 px-4 bg-VouchMed content-evenly"
              }
            >
              <div className={""}>
                <div className={"flex justify-center"}>
                  <UserGroupIcon className={"w-20 h-auto "} fill="white" />
                </div>
                <div
                  className={
                    "flex justify-center py-2 font-bold text-lg text-white"
                  }
                >
                  VOUCHING CANDIDATES
                </div>
                <div className={"text-sm text-white"}>
                  <div className={"flex justify-center"}>
                    Help other qualified candidates from{" "}
                  </div>
                  <div className={"flex justify-center"}>
                    your recruitment pipeline get noticed!
                  </div>
                  <div className={"flex justify-center"}>
                    They may not have been your final pick,
                  </div>
                  <div className={"flex justify-center"}>
                    but they could be someone elses.
                  </div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <MailOpenIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div className={"text-sm text-white  py-2 flex justify-center"}>
                  Candidates get invited to join.
                </div>
                <div className={"flex justify-center pt-8"}>
                  <UserAddIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div className={"text-sm text-white py-2"}>
                  <div className={"flex justify-center"}>
                    Referred candidates match more
                  </div>
                  <div className={"flex justify-center"}>
                    easily with our community
                  </div>
                  <div className={"flex justify-center"}>of recruiters.</div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <SearchCircleIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div>
                  <div className={"text-sm text-white py-2"}>
                    <div className={"flex justify-center"}>Pay it forward.</div>
                    <div className={"flex justify-center"}>
                      Find active and qualified
                    </div>
                    <div className={"flex justify-center"}>
                      candidates for your next hire.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-span-3 px-8"}>
              {" "}
              <div>
                <div className="grid justify-items-end">
                  <XIcon
                    className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <div className="pt-1 font-bold flex justify-center text-base ">
                  Invite a Candidate
                </div>
                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded"
                    id="guess"
                    type="text"
                    placeholder=" Enter Candidate Email"
                    value={email}
                    onChange={(e) => emailChecker(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="	">
                <div className="pt-2">
                  <div className="font-bold text-base flex justify-center">
                    Position Details
                  </div>
                  <div className="text-gray-300 text-xs font-bold flex justify-center">
                    The role they recently interviewed for
                  </div>
                </div>

                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded"
                    id="guess"
                    type="text"
                    placeholder=" Position Title"
                    value={email}
                    onChange={(e) => positionChecker(e.target.value)}
                  ></input>
                </div>
                <div className={"grid grid-cols-2 pt-4"}>
                  <div className={""}>
                    <div className="">
                      <div className="py-1 text-xs font-bold text-gray-500">
                        Position Category
                      </div>
                      <div className={"pr-3"}>
                        <PositionFilterVouch
                          value={positionTitle}
                          backgroundColour="white"
                          onChange={(e) => {
                            setPositionTitle(e.target.value);
                          }}
                          positionDropDownArray={positionDropDownArray}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className={"pt-4"}>
                        <div className="text-xs py-1 font-bold text-gray-500">
                          Furthest Interview Stage:
                        </div>
                        <div className={"pr-3"}>
                          <PositionFilterVouch
                            value={interviewStage}
                            backgroundColour="white"
                            onChange={(e) => {
                              setInterviewStage(e.target.value);
                            }}
                            positionDropDownArray={positionDropDownArray}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                        Seniority Level:
                      </div>{" "}
                      <div className={"pl-3"}>
                        <PositionFilterVouch
                          value={positionLevel}
                          backgroundColour="white"
                          onChange={(e) => {
                            setPositionLevel(e.target.value);
                          }}
                          positionDropDownArray={positionDropDownArray}
                        />
                      </div>
                    </div>
                    <div className={"pt-4"}>
                      <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                        Base Salary Range:
                      </div>{" "}
                      <div className={"pl-3"}>
                        <PositionFilterVouch
                          value={salaryRange}
                          backgroundColour="white"
                          onChange={(e) => {
                            setSalaryRange(e.target.value);
                          }}
                          positionDropDownArray={positionDropDownArray}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6">
                  <hr className="" />
                </div>
                <div className="pb-4">
                  <div className="font-bold flex justify-center text-base">
                    Stand Out Skills
                  </div>
                  <div className="text-gray-400 text-xs py-0.5">
                    <div
                      className={
                        "text-gray-300 text-xs font-bold flex justify-center"
                      }
                    >
                      Select skill that impressed you
                    </div>
                  </div>
                  <div className="grid grid-cols-2 pt-2">
                    <div>
                      <div>
                        <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                          Role Related Strenghs [prop]:
                        </div>{" "}
                        <div className={"pl-3"}>
                          <PositionFilterVouch
                            value={positionLevel}
                            backgroundColour="white"
                            onChange={(e) => {
                              setPositionLevel(e.target.value);
                            }}
                            positionDropDownArray={positionDropDownArray}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs pt-1 pl-3 font-bold text-gray-500">
                        Interpersonal Strengths [props]:
                      </div>{" "}
                      <div className={"pl-3"}>
                        <PositionFilterVouch
                          value={salaryRange}
                          backgroundColour="white"
                          onChange={(e) => {
                            setSalaryRange(e.target.value);
                          }}
                          positionDropDownArray={positionDropDownArray}
                        />
                      </div>
                    </div>
                    <div className={"pt-4"}>
                      <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                        Interview Strengths [props]:
                      </div>{" "}
                      <div className={"pl-3"}>
                        <PositionFilterVouch
                          value={salaryRange}
                          backgroundColour="white"
                          onChange={(e) => {
                            setSalaryRange(e.target.value);
                          }}
                          positionDropDownArray={positionDropDownArray}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2 flex justify-center">
                  <ButtonVouch
                    backgroundColour="VouchGreen"
                    textColour="white"
                    onClick={submitForm}
                    buttonType="rounded"
                    label="Refer Candidate!"
                    disabled={formValidation()}
                  />
                  {/* TODO FORM VALIDATION */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
