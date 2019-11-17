import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  SyntheticEvent
} from "react";
import Input from "../UI/Input";
import List, { IListValues } from "../List";

interface ISearchBoxProps {
  data: IListValues[];
}

const SearchBox: FC<ISearchBoxProps> = ({ data }) => {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      let filterdData = data;

      if (inputValue !== "") {
        filterdData = data.filter(item => {
          return item.label.indexOf(inputValue) !== -1;
        });
      }

      setValues(filterdData);
    }
  }, [data, inputValue]);

  const handleInputChange = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  }, []);

  return (
    <div>
      <Input
        placeholder="Поиск"
        onChange={handleInputChange}
        value={inputValue}
      />
      <List values={values} />
    </div>
  );
};

export default SearchBox;
