import React from "react";
import { Story, Meta } from "@storybook/react";

import { ButtonVouch, ButtonVouchProps } from "../ui/ButtonVouch";

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
    buttonType: {
      control: {
        type: "radio",
        options: ["rounded", "square"],
      },
    },
    textColour: {
      control: {
        type: "radio",
        options: ["white", "black"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonVouchProps> = (args) => <ButtonVouch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColour: "VouchGreen",
  buttonType: "rounded",
  label: "Button",
  disabled: false,
  textColour: "white",
};
