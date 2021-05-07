import React from "react";
import { Text as LabelText } from "@juliensanmartin/label";

interface Props {
  children?: React.ReactNode;
}

const Text = ({ children }: Props) => {
  return (
    <div>
      <span>THIS IS TEXT COMPONENT</span>
      <h2>{children}</h2>
      <LabelText>ADD A FOOTER 10</LabelText>
    </div>
  );
};

export default Text;
