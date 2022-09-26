import { useEffect, useState } from 'react';
import './App.css';
import PlayListForm from './components/PlayListForm';
import PlayListList from './components/PlayListList';
import UserContext from './components/UserContext';
import UserForm from './components/UserForm';
import { getPlayLists } from './service/playListService';

function App() {
  const user = useState('');
  const [usero, setUsero] = useState([]);
  const [playListName, setPlayListName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let playListData = await getPlayLists();

      let filtered = await playListData.filter((el) => {
        return el.userId === usero;
      });
      console.log(playListData);
      console.log(filtered);
      await setPlayListName(filtered);
    };
    fetchData();
  }, [usero]);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <h1 className="title">SPOTLIST</h1>
        <p>Login</p>
        <UserForm
          playListName={playListName}
          setPlayListName={setPlayListName}
          setUsero={setUsero}
        />
        <p>New Playlist</p>
        <PlayListForm
          playListName={playListName}
          setPlayListName={setPlayListName}
          usero={usero}
        />
        <PlayListList
          playListName={playListName}
          setPlayListName={setPlayListName}
        />
      </UserContext.Provider>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}

export default App;
