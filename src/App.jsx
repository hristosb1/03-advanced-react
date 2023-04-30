import { people } from "./data";

function App() {
  return (
    <div>
      {people.map((person) => {
        const { name, nickName, id } = person;
        return <Person key={id} name={name} nickName={nickName} />;
      })}
    </div>
  );
}

const Person = ({ name, nickName }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{nickName}</h3>
    </div>
  );
};

export default App;
