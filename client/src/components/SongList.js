const SongList = ({ song, setSongList }) => {
  return (
    <div>
      <h4>
        <span style={{ fontWeight: 200 }}>Title:</span> {song.title}{' '}
        <span style={{ fontWeight: 200 }}>Artist:</span>
        {song.artist}
      </h4>
    </div>
  );
};

export default SongList;
