import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");

  return (
    <div>
      {/* {if(someCondition){"wont work"}} */}
      <h4>Falsy OR : {text || "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
