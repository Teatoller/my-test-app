import React from 'react';
import './App.css';
import Hadithi from './components/Hadithi/Hadithi';
import Search from './components/Search/Search';

const App = () => {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  const handleChange=(event)=> {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
      <Hadithi/>
    </div>
  );
}

<Search/>
export const getUser = () => {
  return Promise.resolve({ id: '1', name: 'Robin' });
}

export default App;
