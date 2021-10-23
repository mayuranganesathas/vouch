import React from "react";
import { Story, Meta } from "@storybook/react";
import VouchCTA, { VouchCTAProps } from "../dashView/VouchCTA";

export default {
  title: "Dashboard/VouchCTA",
  component: VouchCTA,
  argTypes: {},
} as Meta;

const Template: Story<VouchCTAProps> = (args) => <VouchCTA {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  numberReferred: 3,
  numberThanks: 3,
};
