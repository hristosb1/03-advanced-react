import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  function handleClick() {
    setTimeout(() => {
      setValue((current) => {
        return current + 1;
      });
    }, 3000);
  }
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>
        click me!
      </button>
    </div>
  );
};

export default UseStateGotcha;
