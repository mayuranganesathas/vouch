import React, { useState } from "react";
import Modal from "react-modal";
import { BeakerIcon, XIcon } from "@heroicons/react/solid";
import { ButtonVouch } from "../buttonVouch";
import { SearchFilterDash } from "./searchFilterDash";
// ref http://reactcommunity.org/react-modal/
//ref https://github.com/tailwindlabs/heroicons
export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const VouchCTAModal = ({ modalIsOpen, closeModal }: VouchCTAModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "75%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

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

  const dropDownArray = ["test1", "test2", "test3", "test4", "test5"];
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
        style={customStyles}
        contentLabel="Test Name"
      >
        <div>
          <div className="flex justify-end gap-x-96">
            <div>
              <div className="py-2">Referred Candidate Email</div>
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
          <div className="py-4">
            <hr className="text-red-500 p-4 h-8 justify-items-end" />
          </div>

          <div className="py-4">
            <div className="text-bold">Position Details</div>
            <div className="text-gray-400 text-xs">
              For the role they just interviewed for
            </div>
          </div>
          <div>
            <div className="flex-norwap">
              <div className="py-2 text-sm">Position Title</div>
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
                <div className="text-sm py-0.5">Stage Of Interview:</div>{" "}
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
                <div className="text-sm py-0.5">Position Level:</div>{" "}
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
                <div className="text-sm py-0.5">Salary Range:</div>{" "}
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
            <div className="text-sm py-1">Link to job Posting</div>{" "}
            <input
              placeholder=" Job Posting"
              className="border-2 w-60 rounded-lg"
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
            <div className="flex flex-wrap justify-center gap-x-8  gap-y-6 py-6">
              <label
                className={
                  " flex text-gray-400   border-2 rounded-full w-36  gap-x-0.5"
                }
              >
                <input
                  type="radio"
                  value={dropDownArray[0]}
                  className={"m-1.5"}
                  name="standout"
                  onChange={(e) => setStandOutSkill1(e.target.value)}
                />
                <div className="gap-x-1"> {dropDownArray[0]}</div>
              </label>
              <label
                className={
                  " flex text-gray-400   border-2 rounded-full w-36  gap-x-0.5"
                }
              >
                {" "}
                <input
                  type="radio"
                  value={dropDownArray[1]}
                  className={"m-1.5"}
                  name="standout"
                  onChange={(e) => setStandOutSkill2(e.target.value)}
                />
                {dropDownArray[1]}
              </label>
              <label
                className={
                  " flex text-gray-400   border-2 rounded-full w-36  gap-x-0.5"
                }
              >
                {" "}
                <input
                  type="radio"
                  value={dropDownArray[2]}
                  className={"m-1.5"}
                  name="standout"
                  onChange={(e) => setStandOutSkill3(e.target.value)}
                />
                {dropDownArray[2]}
              </label>
              <label
                className={
                  " flex  text-gray-400 border-2 rounded-full w-36  gap-x-0.5"
                }
              >
                {" "}
                <input
                  type="radio"
                  value={dropDownArray[3]}
                  className={"m-1.5"}
                  name="standout"
                  onChange={(e) => setStandOutSkill4(e.target.value)}
                />
                {dropDownArray[3]}
              </label>
              <label
                className={
                  " flex  text-gray-400  border-2 rounded-full w-36 gap-x-0.5"
                }
              >
                {" "}
                <input
                  type="radio"
                  value={dropDownArray[4]}
                  className={"m-1.5"}
                  name="standout"
                  onChange={(e) => setStandOutSkill5(e.target.value)}
                />
                {dropDownArray[4]}
              </label>
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
            {/* {setFormValidation( check forms ? true: false)} */}
          </div>
        </div>
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
