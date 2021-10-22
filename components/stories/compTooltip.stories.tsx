import React from "react";
import { Story, Meta } from "@storybook/react";
import { CompTooltip, CompTooltipProps } from "../dashView/CompTooltip";

export default {
  title: "Dashboard/compTooltip",
  component: CompTooltip,
  argTypes: {},
} as Meta;

const Template: Story<CompTooltipProps> = (args) => <CompTooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  companyName: "Google Yeah",
  companyLocation: "Mountain View | California",
  userHrCompanyWebsite: "wwww.google.com",
};
