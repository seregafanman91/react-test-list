import React, { FC, memo, useCallback } from "react";
import { List as VirtializedList, AutoSizer } from "react-virtualized";
import styled from 'styled-components';
import ListItem from "./children/ListItem";
import Text from "../UI/Text";
import { IListValues } from "./List.interfaces";

interface IListProps {
  values: IListValues[];
}

const List: FC<IListProps> = ({ values }) => {
  const handleRowRenderer = useCallback(
    ({ style, index }) => {
      return (
        <ListItem key={values[index].value} style={style}>
          <Text>{values[index].label}</Text>
        </ListItem>
      );
    },
    [values]
  );
  return (
    <ContainerStyled>
      <AutoSizer>
        {({width, height}) => (
          <VirtializedList
            rowHeight={18}
            width={width}
            height={height}
            rowRenderer={handleRowRenderer}
            rowCount={values.length}
          />
        )}
      </AutoSizer>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  height: calc(100vh - 50px);
`;

export default memo(List);
