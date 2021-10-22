import React from "react";
import { Story, Meta } from "@storybook/react";
import VouchCTAModal, { VouchCTAModalProps } from "../dashView/VouchCTAModal";

export default {
  title: "Dashboard/VouchCTAModal",
  component: VouchCTAModal,
  argTypes: {},
} as Meta;

const Template: Story<VouchCTAModalProps> = (args) => (
  <VouchCTAModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
