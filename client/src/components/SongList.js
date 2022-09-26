import { deleteOneSong } from '../service/songListService';

const SongList = ({ song, setSongList }) => {
  const handleDelete = async () => {
    await deleteOneSong(song.title);
    await setSongList((prev) => {
      const filtered = prev.filter(
        (individualSong) => individualSong.title !== song.title
      );
      return [...filtered];
    });
  };
  return (
    <div>
      <h4>
        <span>
          <button onClick={handleDelete}>🗑</button>
        </span>
        <span style={{ fontWeight: 200 }}>Title:</span> {song.title}{' '}
        <span style={{ fontWeight: 200 }}>Artist:</span>
        {song.artist}
      </h4>
    </div>
  );
};

export default SongList;
