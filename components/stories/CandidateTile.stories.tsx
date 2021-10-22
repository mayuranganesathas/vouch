import React from "react";
import { Story, Meta } from "@storybook/react";
import { CandidateTile, CandidateTileProps } from "../dashView/CandidateTile";

export default {
  title: "Dashboard/CandidateTile",
  component: CandidateTile,
  argTypes: {},
} as Meta;

const Template: Story<CandidateTileProps> = (args) => (
  <CandidateTile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  userID: 123,
  positionTitle: "Senior Back End Dev",
  salaryRange: "120K-140k $/year",
  jobLocation: "Remote",
  companyLogo: "./images/Google-logo.png",
  numEmployees: "5000+",
  companyName: "Google Ltd.",
  stageInterview: "Panel Interview",
  stageNumber: "(4 of 5)",
  pastPosition1: "Director of Eng.",
  pastIndustry1: "Tech",
  standOutSkill1: "Great Communication",
};
