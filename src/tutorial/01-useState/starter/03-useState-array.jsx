import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = function (id) {
    console.log(id);
    const newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };
  const clearAllItems = function () {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={clearAllItems}>
        clear items
      </button>
    </div>
  );
};
export default UseStateArray;
