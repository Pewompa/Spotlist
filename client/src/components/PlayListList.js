import React from 'react';
import PlayList from './PlayList';

const PlayListList = ({ playListName, setPlayListName }) => {
  return (
    <div>
      {playListName.map((playList, i) => {
        return (
          <PlayList
            key={i}
            playList={playList}
            setPlayListName={setPlayListName}
          />
        );
      })}
    </div>
  );
};

export default PlayListList;
