import { useState, useContext } from 'react';
import { getUser } from '../service/userAuthService';
import UserContext from './UserContext';

const UserForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [userId, setUserId] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await getUser(username, password);
    // setUserId(data[0].id);
    setUser(data[0].id);
    event.target.username.value = '';
    event.target.password.value = '';

    console.log(user);
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
