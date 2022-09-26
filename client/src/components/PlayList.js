import { useState, useEffect } from 'react';
import { getSongs } from '../service/songListService';
import SongList from './SongList';
import SongForm from './SongForm';
import '../App.css';

const PlayList = ({ playListName }) => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const data = await getSongs(playListName.userId, playListName.listId);

      setSongList([data]);
    };
    fetchData();
  }, [playListName, songList]);

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
    </div>
  );
};

export default PlayList;
