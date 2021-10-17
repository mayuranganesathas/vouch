import React from "react";
import { Story, Meta } from "@storybook/react";

import { ButtonVouch, ButtonVouchProps } from "./buttonVouch";

export default {
  title: "UI/ButtonVouch",
  component: ButtonVouch,
  argTypes: {
    backgroundColour: {
      control: {
        type: "radio",
        options: ["VouchGreen", "white"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonVouchProps> = (args) => <ButtonVouch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColour: "VouchGreen",
  label: "Button",
  disabled: false,
};
