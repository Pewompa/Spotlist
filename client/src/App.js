import { useEffect, useState } from 'react';
import './App.css';
import PlayListForm from './components/PlayListForm';
import PlayListList from './components/PlayListList';
import UserContext from './components/UserContext';
import UserForm from './components/UserForm';
import { getPlayLists } from './service/playListService';

function App() {
  const user = useState('muchachen');
  const [playListName, setPlayListName] = useState([]);
  const [usero, setUsero] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getPlayLists();
  //     const filtered = data.filter((id) => {
  //       return (id.listId = user);
  //     });
  //     console.log(filtered);
  //     setPlayListName(data);
  //   }
  //   fetchData();
  // }, []);

  console.log(playListName);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <h1>SPOTLIST</h1>
        <UserForm
          playListName={playListName}
          setPlayListName={setPlayListName}
        />
        <PlayListForm
          playListName={playListName}
          setPlayListName={setPlayListName}
        />
        {/* <PlayListList
          playListName={playListName}
          setPlayListName={setPlayListName}
        /> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
