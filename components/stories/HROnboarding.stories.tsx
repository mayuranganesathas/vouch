import React from "react";
import { Story, Meta } from "@storybook/react";
import { HROnboarding, HROnboardingProps } from "../forms/HROnboarding";

export default {
  title: "Dashboard/HROnboarding",
  component: HROnboarding,
  argTypes: {},
} as Meta;

const Template: Story<HROnboardingProps> = (args) => <HROnboarding {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  industryArray: ["damn", "you"],
  employeeArray: ["damn", "you"],
  hrVoucherPosition: ["damn", "you"],
  checkBoxValidation: true,
  formValidation: true,
};
