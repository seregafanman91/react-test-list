import React, { FC, useState, useEffect } from "react";
import { IListValues } from "../List";
import SearchBox from "../SearchBox";
import getFakeValues from "../../utils/getFakeValues";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  const [data, setData] = useState<IListValues[]>([]);

  useEffect(() => {
    setData(getFakeValues());
  }, []);

  return <SearchBox data={data} />;
};

export default App;
