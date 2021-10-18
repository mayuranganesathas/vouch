import React from "react";
import { Story, Meta } from "@storybook/react";
import HrCompanyProfile, {
  HrCompanyProfileProps,
} from "../ui/HrCompanyProfile";

export default {
  title: "NAVBAR/HRCompanyProfile",
  component: HrCompanyProfile,
  argTypes: {
    backgroundColor: {
      control: {
        userHrCompanyImage: "",
        userHrCompanyName: "",
        userHrCompanyIndustry: "",
      },
    },
  },
} as Meta;

const Template: Story<HrCompanyProfileProps> = (args) => (
  <HrCompanyProfile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  userHrCompanyImage: "/images/google-logo.png",
  userHrCompanyName: "Google Mountain View",
  userHrCompanyIndustry: "Tech - SaaS",
  userHrCompanyWebsite: "www.google.com",
};
