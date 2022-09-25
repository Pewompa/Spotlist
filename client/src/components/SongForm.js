import { useState } from 'react';
import { addSongs } from '../service/songListService';

const SongForm = ({ playListName, songList, setSongList }) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await addSongs(
      playListName.userId,
      playListName.listId,
      artist,
      title
    );
    setSongList([...songList, data]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="insert artist name"
        onChange={handleArtistChange}
      ></input>
      <input
        type="text"
        placeholder="insert artist's song title"
        onChange={handleTitleChange}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default SongForm;
