import { useState } from 'react';
import { getUser } from '../service/userAuthService';

const UserForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await getUser(username, password);
    await setUser(data[0].id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        onChange={handleUsernameChange}
        name="username"
      ></input>
      <input
        type="text"
        placeholder="password"
        onChange={handlePasswordChange}
        name="password"
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default UserForm;
