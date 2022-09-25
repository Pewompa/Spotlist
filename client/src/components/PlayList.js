import { useState, useEffect } from 'react';
import { getSongs } from '../service/songListService';
import SongList from './SongList';

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
      <h2>{playListName.name}</h2>
      {songList.length &&
        songList[0].map((song, i) => {
          return <SongList key={i} song={song} setSongList={setSongList} />;
        })}
    </div>
  );
};

export default PlayList;
