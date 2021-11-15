import React from "react";
import { Story, Meta } from "@storybook/react";

import WelcomeComp, { WelcomeCompProps } from "../dashView/WelcomeComp";
export default {
  title: "Dashboard/WelcomeComp",
  component: WelcomeComp,
  argTypes: {},
} as Meta;

const Template: Story<WelcomeCompProps> = (args) => <WelcomeComp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
