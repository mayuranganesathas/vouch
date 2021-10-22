import React from "react";
import { Story, Meta } from "@storybook/react";

import { ButtonEmail, ButtonEmailProps } from "../dashView/ButtonEmail";

export default {
  title: "Dashboard/ButtonEmail",
  component: ButtonEmail,
  argTypes: {},
} as Meta;

const Template: Story<ButtonEmailProps> = (args) => <ButtonEmail {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
