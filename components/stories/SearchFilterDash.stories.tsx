import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  SearchFilterDash,
  SearchFilterDashProps,
} from "../dashView/SearchFilterDash";

export default {
  title: "UI/SearchFilter",
  component: SearchFilterDash,
  argTypes: {
    backgroundColour: {
      control: {
        type: "radio",
        options: ["VouchGreen", "white"],
      },
    },
  },
} as Meta;

const Template: Story<SearchFilterDashProps> = (args) => (
  <SearchFilterDash {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColour: "white",
  dropDownArray: ["hello", "world", "you", "are", "here", "world"],
};
