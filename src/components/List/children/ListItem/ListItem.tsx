import React, { FC, memo } from "react";

interface IListItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const ListItem: FC<IListItemProps> = ({ children, ...otherProps }) => {
  return <div {...otherProps}>{children}</div>;
};

export default memo<FC<IListItemProps>>(ListItem);
