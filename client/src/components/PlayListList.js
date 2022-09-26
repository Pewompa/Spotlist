import { useContext, useEffect } from 'react';
import { getPlayLists } from '../service/playListService';
import PlayList from './PlayList';
import UserContext from './UserContext';

const PlayListList = ({ playListName, setPlayListName }) => {
  const [user] = useContext(UserContext);
  // console.log(user);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let playListData = await getPlayLists();

  //     let filtered = await playListData.filter((el) => {
  //       return el.userId === user;
  //     });

  //     await setPlayListName(filtered);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <hr />
      {playListName.map((playList, i) => {
        return (
          <PlayList
            key={i}
            playListName={playList}
            setPlayListName={setPlayListName}
          />
        );
      })}
    </div>
  );
};

export default PlayListList;
