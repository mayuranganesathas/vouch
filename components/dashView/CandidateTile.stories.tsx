import React from "react";
import { Story, Meta } from "@storybook/react";
import { CandidateTile, CandidateTileProps } from "./CandidateTile";
import { Primary } from "../stories/UserProfile.stories";

export default {
  title: "Dashboard/CandidateTile",
  component: CandidateTile,
  argTypes: {},
} as Meta;

const Template: Story<CandidateTileProps> = (args) => (
  <CandidateTile {...args} />
);

export const Primar = Template.bind({});
Primary.args = {};
