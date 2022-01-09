import InformationCircleIcon from "@heroicons/react/solid/InformationCircleIcon";
import React from "react";
import ReactTooltip from "react-tooltip";
export interface InformationIconToolTipProps {
  toolTipCopy: string;
}

const InformationIconToolTip = ({
  toolTipCopy,
}: InformationIconToolTipProps) => {
  return (
    <div>
      <InformationCircleIcon
        className={"h-4 w-4 text-gray-400 hover:text-yellow-200 cursor-pointer"}
        data-tip={toolTipCopy}
      />{" "}
      <ReactTooltip place="bottom" />
    </div>
  );
};

export default InformationIconToolTip;
