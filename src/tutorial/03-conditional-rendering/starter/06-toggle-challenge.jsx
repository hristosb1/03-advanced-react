import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  const SomeElement = () => {
    return <h2>hello there</h2>;
  };

  return (
    <div>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setValue(!value);
        }}
      >
        click me
      </button>
      {value && <SomeElement />}
    </div>
  );
};

export default ToggleChallenge;
