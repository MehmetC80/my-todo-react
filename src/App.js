import './styles/app.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { AddItem } from './components/AddItem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      description: 'item 01',
    },
    {
      id: 2,
      checked: false,
      description: 'item 02',
    },

    {
      id: 3,
      checked: false,
      description: 'item 03',
    },
  ]);

  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('itemlist', JSON.stringify(newItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setAndSaveItems(listItems);
  };

  const addItem = (description) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, description };
    const listItems = [...items, myNewItem];

    setAndSaveItems(listItems);
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
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
