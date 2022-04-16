import './styles/app.css';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { AddItem } from './components/AddItem';
import { SearchItem } from './components/SearchItem';

import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('itemlist')) || []
  );

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('itemlist', JSON.stringify(items));
  }, [items]);

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

  const addItem = (description) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, description };
    const listItems = [...items, myNewItem];

    setItems(listItems);
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
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items.filter((item) =>
          item.description.toLowerCase().includes(search.toLowerCase())
        )}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
