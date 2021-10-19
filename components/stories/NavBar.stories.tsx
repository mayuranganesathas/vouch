import React from "react";
import { Story, Meta } from "@storybook/react";
import NavBar from "../Navbar";

export default {
  title: "NAVBAR/NavBar",
  component: NavBar,
  argTypes: {},
} as Meta;

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
