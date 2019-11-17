import React, { FC } from "react";

interface ITextProps {
  tag?: keyof JSX.IntrinsicElements;
}

const Text: FC<ITextProps> = ({ tag: Tag, children }) => {
  return <Tag>{children}</Tag>;
};

Text.defaultProps = {
  tag: "span"
};

export default Text;
