import { useEffect, useState } from 'react';
import './App.css';
import PlayListForm from './components/PlayListForm';
import PlayListList from './components/PlayListList';
import UserForm from './components/UserForm';
import { getPlayLists } from './service/playListService';

function App() {
  const [user, setUser] = useState([]);
  const [playListName, setPlayListName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let playListData = await getPlayLists();

      let filtered = playListData.filter((el) => {
        return el.userId === user;
      });

      setPlayListName(filtered);
    };
    fetchData();
  }, [user]);

  return (
    <div className="App">
      <h1 className="title">SPOTLIST</h1>
      <p>Login</p>
      <UserForm
        playListName={playListName}
        setPlayListName={setPlayListName}
        setUser={setUser}
      />
      <p>New Playlist</p>
      <PlayListForm
        playListName={playListName}
        setPlayListName={setPlayListName}
        user={user}
      />
      <PlayListList
        playListName={playListName}
        setPlayListName={setPlayListName}
      />
    </div>
  );
}

export default App;
