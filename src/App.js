import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'item 01',
    },
    {
      id: 2,
      checked: false,
      item: 'item 02',
    },

    {
      id: 3,
      checked: false,
      item: 'item 03',
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify());
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify());
  };

  return (
    <div className='app'>
      <Header title='PNA' subTitle='Personal Note App' />
      <Content
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
