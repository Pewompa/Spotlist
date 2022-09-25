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
    event.target.artist.value = '';
    event.target.title.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add artist's song title"
        onChange={handleTitleChange}
        name="title"
      ></input>
      <input
        type="text"
        placeholder="Add artist name"
        onChange={handleArtistChange}
        name="artist"
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default SongForm;
