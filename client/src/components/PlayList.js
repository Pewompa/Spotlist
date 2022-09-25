import { useState, useEffect } from 'react';
import { getSongs } from '../service/songListService';
import SongList from './SongList';
import SongForm from './SongForm';
import '../App.css';

const PlayList = ({ playListName, setPlayListName }) => {
  const [songList, setSongList] = useState([]);
  console.log(playListName);
  useEffect(() => {
    const fetchData = async function () {
      const data = await getSongs(playListName.userId, playListName.listId);
      console.log(data);
      setSongList([...songList, data]);
    };
    fetchData();
  }, []);
  console.log(songList);
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
