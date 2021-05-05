import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Text = ({ children }: Props) => {
  return (
    <div>
      <span>THIS IS TEXT COMPONENT</span>
      <h2>{children}</h2>
      <span>ADD A FOOTER 2</span>
    </div>
  );
};

export default Text;
