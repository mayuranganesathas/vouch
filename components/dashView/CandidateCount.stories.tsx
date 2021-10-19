import React from "react";
import { Story, Meta } from "@storybook/react";
import { CandidateCount, CandidateCountProps } from "./CandidateCount";

export default {
  title: "UI/CandidateCount",
  component: CandidateCount,
  argTypes: {},
} as Meta;

const Template: Story<CandidateCountProps> = (args) => (
  <CandidateCount {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  totalCandidateIcon: "/images/candidates.png",
  candidateCount: [1, 2, 3, 4, 5],
  lastCandidateCount: "3",
};
