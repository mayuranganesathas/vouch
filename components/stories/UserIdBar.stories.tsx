import React from "react";
import { Story, Meta } from "@storybook/react";
import UserIdBar from "../UserIdBar";

export default {
  title: "Dashboard/UserIdBar",
  component: UserIdBar,
  argTypes: {},
} as Meta;

const Template = (args) => <UserIdBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
