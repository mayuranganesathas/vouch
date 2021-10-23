import React, { useState } from "react";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import StandOutSkill from "../ui/StandOutSkill";
// ref http://reactcommunity.org/react-modal/
//ref https://github.com/tailwindlabs/heroicons
export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const VouchCTAModal = ({ modalIsOpen, closeModal }: VouchCTAModalProps) => {
  //   const customStyles = {
  //     content: {
  //       top: "50%",
  //       left: "75%",
  //       right: "auto",
  //       bottom: "auto",
  //       marginRight: "-50%",
  //       transform: "translate(-80%, -50%)",
  //     },
  //     overlay: {
  //       outerWidth: 200,
  //     },
  //   };

  const [formVaildation, setFormValidation] = useState(false);
  const [email, setEmail] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [interviewStage, setInterviewStage] = useState("");
  const [positionLevel, setPositionLevel] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [jobPostingLink, setJobPostingLink] = useState("");
  const [standOutSkill1, setStandOutSkill1] = useState("");
  const [standOutSkill2, setStandOutSkill2] = useState("");
  const [standOutSkill3, setStandOutSkill3] = useState("");
  const [standOutSkill4, setStandOutSkill4] = useState("");
  const [standOutSkill5, setStandOutSkill5] = useState("");

  const dropDownArray = [
    "test1231231",
    "test2123123",
    "test31223123",
    "test4123123",
    "test512312231",
  ];
  //replace with DB Call
  const emailChecker = () => {
    //toDO Form validation, check email input to see if it includes .com / or .ca or .in etc.
  };

  const submitForm = () => {
    //post to db
    //clear states to 0
    //send email to candidate
  };

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" w-min h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto h-min absolute right-0"
        //     overlayClassName="Overlay
        // bg-gray-100"
        contentLabel="Test Name"
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className="	">
          <div className="flex justify-between gap-x-40  py-1 ">
            <div>
              <div className="py-2 ">Referred Candidate Email</div>
              <div>
                <input
                  className="border-2 w-60 rounded-lg"
                  id="guess"
                  type="text"
                  placeholder=" Enter Candidate Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <XIcon
              className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div className="py-2">
            <hr className="text-red-500 justify-items-end" />
          </div>

          <div className="py-4">
            <div className="text-bold text-md">Position Details</div>
            <div className="text-gray-400 text-xs">
              For the role they just interviewed for
            </div>
          </div>
          <div>
            <div className="flex-norwap">
              <div className="py-1 text-xs">Position Title</div>
              <SearchFilterDash
                value={positionTitle}
                backgroundColour="white"
                onChange={(e) => {
                  setPositionTitle(e.target.value);
                }}
                dropDownArray={dropDownArray}
                width="wide-sm"
              />
            </div>
            <div className="py-4 flex gap-8">
              <div>
                <div className="text-xs py-0.5">Stage Of Interview:</div>{" "}
                <SearchFilterDash
                  value={interviewStage}
                  backgroundColour="white"
                  onChange={(e) => {
                    setInterviewStage(e.target.value);
                  }}
                  dropDownArray={dropDownArray}
                  width="wide-sm"
                />
              </div>
              <div>
                <div className="text-xs py-0.5">Position Level:</div>{" "}
                <SearchFilterDash
                  value={positionLevel}
                  backgroundColour="white"
                  onChange={(e) => {
                    setPositionLevel(e.target.value);
                  }}
                  dropDownArray={dropDownArray}
                  width="wide-sm"
                />
              </div>
              <div>
                <div className="text-xs py-0.5">Salary Range:</div>{" "}
                <SearchFilterDash
                  value={salaryRange}
                  backgroundColour="white"
                  onChange={(e) => {
                    setSalaryRange(e.target.value);
                  }}
                  dropDownArray={dropDownArray}
                  width="wide-sm"
                />
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="text-xs py-1">Link to job Posting</div>{" "}
            <input
              placeholder=" Job Posting"
              className="border-2 w-60 rounded-lg text-sm h-5"
              value={jobPostingLink}
              onChange={(e) => setJobPostingLink(e.target.value)}
            />
          </div>
          <div className="py-4">
            <div className="text-bold">Stand Out Skills</div>
            <div className="text-gray-400 text-xs">
              Select the top skill that impressed you the most about this
              Candidate{" "}
            </div>
            <div className="flex flex-wrap justify-center gap-x-4  gap-y-4 py-6">
              <StandOutSkill
                value={dropDownArray[0]}
                onChange={(e) => setStandOutSkill1(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[1]}
                onChange={(e) => setStandOutSkill2(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[2]}
                onChange={(e) => setStandOutSkill3(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[3]}
                onChange={(e) => setStandOutSkill4(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[4]}
                onChange={(e) => setStandOutSkill5(e.target.value)}
              />
            </div>
          </div>
          <div className="py-1 justify-items-end">
            <ButtonVouch
              backgroundColour="VouchGreen"
              textColour="white"
              onClick={submitForm}
              buttonType="rounded"
              label="Refer Candidate!"
              disabled={formVaildation ? false : true}
            />
            {/* {setFormValidation(
              email.length > 0 &&
                positionTitle.length > 0 &&
                interviewStage.length > 0 &&
                positionLevel.length > 0 &&
                salaryRange.length > 0 &&
                jobPostingLink.length > 0 &&
                (standOutSkill2.length > 0 ||
                  standOutSkill3.length > 0 ||
                  standOutSkill4.length > 0 ||
                  standOutSkill5.length > 0 ||
                  standOutSkill1.length > 0)
                ? true
                : false
            )} */}
          </div>
        </div>
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
