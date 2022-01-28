import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CandidateOnThree,
  CandidateOnThreeProps,
} from "../forms/CandidateOnThree";

export default {
  title: "CandidateOnBoarding/CandidatesOnThree",
  component: CandidateOnThree,
  argTypes: {},
} as Meta;

const Template: Story<CandidateOnThreeProps> = (args) => (
  <CandidateOnThree {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
