import React from "react";
import { Story, Meta } from "@storybook/react";
import { CandidateOnOne, CandidateOnOneProps } from "../forms/CandidateOnOne";

export default {
  title: "CandidateOnboarding/CandidateOnOne",
  component: CandidateOnOne,
  argTypes: {},
} as Meta;

const Template: Story<CandidateOnOneProps> = (args) => (
  <CandidateOnOne {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
