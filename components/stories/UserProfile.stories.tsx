import React from "react";
import { Story, Meta } from "@storybook/react";
import UserProfile, { UserProfileProps } from "../dashView/UserProfile";

export default {
  title: "Dashboard/UserProfile",
  component: UserProfile,
  argTypes: {
    backgroundColor: {
      control: {
        userHrImg: "",
        userHrName: "",
        userHrPosition: "",
      },
    },
  },
} as Meta;

const Template: Story<UserProfileProps> = (args) => <UserProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  userHrImg: "/images/userprofile.png",
  userHrName: "Brian Lee",
  userHrPosition: "HR Lead",
};
