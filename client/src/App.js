import { useEffect, useState } from 'react';
import './App.css';
import PlayListForm from './components/PlayListForm';
import UserContext from './components/UserContext';
import UserForm from './components/UserForm';
import { getPlaylists } from './service/playListService';

function App() {
  const user = useState('muchachen');
  const [playlist, setPlayList] = useState([]);
  const [usero, setUsero] = useState([]);
  useEffect(() => {
    getPlaylists().then((data) => setPlayList(data));
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <h1>SPOTLIST</h1>
        <UserForm />
        <PlayListForm />
      </UserContext.Provider>
    </div>
  );
}

export default App;
