import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CandidateOnTwo,
  CandidateOnTwoProps,
} from "../CandidateOnboarding/CandidateOnTwo";

export default {
  title: "CandidateOnBoarding/CandidateOnTwo",
  component: CandidateOnTwo,
  argTypes: {},
} as Meta;

const Template: Story<CandidateOnTwoProps> = (args) => (
  <CandidateOnTwo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
