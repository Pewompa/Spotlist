import { useEffect, useState } from 'react';
import PlayListForm from './components/PlayListForm';
import UserForm from './components/UserForm';
import { getPlaylists } from './service/playListService';
import './App.css';

function App() {
  const [playlist, setPlayList] = useState([]);
  useEffect(() => {
    getPlaylists().then((data) => setPlayList(data));
    console.log(playlist);
  }, []);
  return (
    <div className="App">
      <h1>SPOTLIST</h1>
      <UserForm />
      <PlayListForm />
    </div>
  );
}

export default App;
