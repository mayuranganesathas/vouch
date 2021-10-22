import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  ButtonLinkedin,
  ButtonLinkedinProps,
} from "../dashView/ButtonLinkedin";

export default {
  title: "Dashboard/ButtonLinkedin",
  component: ButtonLinkedin,
  argTypes: {},
} as Meta;

const Template: Story<ButtonLinkedinProps> = (args) => (
  <ButtonLinkedin {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
