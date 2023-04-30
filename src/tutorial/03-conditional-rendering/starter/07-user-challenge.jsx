import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "johny" });
  }
  function logout() {
    setUser(null);
  }
  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button onClick={logout}>log out</button>
        </div>
      ) : (
        <div>
          <h4>please log in</h4>
          <button onClick={login}>log in</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
