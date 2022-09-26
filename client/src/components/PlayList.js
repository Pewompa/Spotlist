import { useState, useEffect } from 'react';
import { deleteSongs, getSongs } from '../service/songListService';
import SongList from './SongList';
import SongForm from './SongForm';
import '../App.css';
import { deletePlayList } from '../service/playListService';

const PlayList = ({ playListName, setPlayListName }) => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const data = await getSongs(playListName.userId, playListName.listId);

      setSongList([data]);
    };
    fetchData();
  }, [playListName, songList]);

  const handleDelete = async () => {
    await deletePlayList(playListName.listId);
    await deleteSongs(playListName.listId);

    await setPlayListName((prev) => {
      const filtered = prev.filter(
        (playList) => playList.listId !== playListName.listId
      );
      return [...filtered];
    });
  };

  return (
    <div>
      <h3 className="title">{playListName.name}</h3>
      <SongForm
        playListName={playListName}
        songList={songList}
        setSongList={setSongList}
      ></SongForm>
      {songList.length &&
        songList[0].map((song, i) => {
          return <SongList key={i} song={song} setSongList={setSongList} />;
        })}
      <button onClick={handleDelete}>Delete Playlist</button>
    </div>
  );
};

export default PlayList;
