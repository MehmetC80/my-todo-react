import './styles/app.css';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { AddItem } from './components/AddItem';
import { SearchItem } from './components/SearchItem';
import { apiRequest } from './components/apiRequest';
import { useState, useEffect } from 'react';

function App() {
  const ApiUrl = 'http://localhost:4711/items';

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(ApiUrl);
        if (!response.ok) throw Error('Die Daten wurden nicht empfangen');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsloading(false);
      }
    };

    setTimeout(() => {
      //Dies ist ein IEFE zum ausführen der fetchItems
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
  };

  const addItem = async (description) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, description };
    const listItems = [...items, myNewItem];

    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(ApiUrl, postOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className='app'>
      <Header title='PNA' subTitle='Personal Note App' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main className='main'>
        {fetchError && (
          <p
            style={{ color: 'red', marginTop: '40%' }}
          >{`Error: ${fetchError}`}</p>
        )}
        {isLoading && <p>Loading Todos...</p>}
        {!fetchError && !isLoading && (
          <Content
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            items={items.filter((item) =>
              item.description.toLowerCase().includes(search.toLowerCase())
            )}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
