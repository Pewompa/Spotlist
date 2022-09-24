import { useContext } from 'react';
import SongForm from '../SongForm';
import UserContext from './UserContext';

const PlayListForm = () => {
  const [user] = useContext(UserContext);
  console.log(user);
  return (
    <>
      <form>
        <input type="text" placeholder="insert playlist name"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default PlayListForm;
