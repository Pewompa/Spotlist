import { useState } from 'react';
import './App.css';
import PlayListForm from './components/PlayListForm';
import PlayListList from './components/PlayListList';
import UserContext from './components/UserContext';
import UserForm from './components/UserForm';

function App() {
  const user = useState('');
  const [playListName, setPlayListName] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <h1 className="title">SPOTLIST</h1>
        <p>Login</p>
        <UserForm
          playListName={playListName}
          setPlayListName={setPlayListName}
        />
        <p>New Playlist</p>
        <PlayListForm
          playListName={playListName}
          setPlayListName={setPlayListName}
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
