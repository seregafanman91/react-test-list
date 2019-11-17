import uuid from "uuid";
import faker from "faker";

const getFakeValues = () => {
  const data = [];

  for (let i = 0; i < 10000; i++) {
    data.push({
      label: faker.name.findName(),
      value: uuid()
    });
  }

  return data;
};

export default getFakeValues;
