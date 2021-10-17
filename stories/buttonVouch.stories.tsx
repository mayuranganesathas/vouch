import React from "react";
import { Story, Meta } from "@storybook/react";

import { ButtonVouch, ButtonVouchProps } from "../components/buttonVouch";

export default {
  title: "UI/ButtonVouch",
  component: ButtonVouch,
  argTypes: {
    backgroundColour: {
      control: {
        type: "radio",
        options: ["blue", "white"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonVouchProps> = (args) => <ButtonVouch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColour: "blue",
  label: "Button",
};
