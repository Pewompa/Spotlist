const SongList = ({ song, setSongList }) => {
  return (
    <div>
      <h3>{song.title}</h3>
      <h5>{song.artist}</h5>
    </div>
  );
};

export default SongList;
