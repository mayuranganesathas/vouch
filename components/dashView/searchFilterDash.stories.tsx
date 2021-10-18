import React from "react";
import { Story, Meta } from "@storybook/react";

import { SearchFilterDash, SearchFilterDashProps } from "./searchFilterDash";

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
  s,
} as Meta;

const Template: Story<SearchFilterDashProps> = (args) => (
  <SearchFilterDash {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColour: "white",
  filterLabel: "Filter Candidates by:",
  dropDownArray: [0, 1, 2, 3, 2],
};
