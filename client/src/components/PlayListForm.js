import { useContext, useState } from 'react';
import { addPlayList } from '../service/playListService';
// import SongForm from './SongForm';
import UserContext from './UserContext';
import { v4 as uuidv4 } from 'uuid';
const PlayListForm = ({ playListName, setPlayListName }) => {
  const [temp, setTemp] = useState('');
  const [user] = useContext(UserContext);
  // const [playListName, setPlayListName] = useState('');

  const handleNameChange = (event) => {
    setTemp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await addPlayList(user, temp, uuidv4());
    setPlayListName([...playListName, data.name]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="insert playlist name"
          name="name"
          onChange={handleNameChange}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default PlayListForm;
