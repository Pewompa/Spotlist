import { useState } from 'react';
import { addPlayList } from '../service/playListService';

import { v4 as uuidv4 } from 'uuid';

const PlayListForm = ({ playListName, setPlayListName, user }) => {
  const [temp, setTemp] = useState('');

  const handleNameChange = (event) => {
    setTemp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await addPlayList(user, temp, uuidv4());
    setPlayListName([...playListName, data]);
    event.target.playlist.value = '';
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="insert playlist name"
          name="playlist"
          onChange={handleNameChange}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default PlayListForm;
