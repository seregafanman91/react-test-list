import React, { FC } from "react";

interface ITextProps {
  tag?: keyof JSX.IntrinsicElements;
}

const Text: FC<ITextProps> = ({ tag, children }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};

Text.defaultProps = {
  tag: "span"
};

export default Text;
