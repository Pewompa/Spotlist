import React from 'react';
import PlayList from './PlayList';

const PlayListList = ({ playListName, setPlayListName }) => {
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
