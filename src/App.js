import './styles/app.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { useState } from 'react';

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

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem('itemlist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
    localStorage.setItem('itemlist', JSON.stringify(listItems));
  };

  // const addItem = (item) => {
  //   const id = item.length ? items[item.length - 1].id + 1 : 1;
  //   const myNewItem = { id, checked: false, description };
  //   const listItem = [...items, myNewItem];
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newItem) return;

  //   setItems('');
  // };

  return (
    <div className='app'>
      <Header title='PNA' subTitle='Personal Note App' />
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
