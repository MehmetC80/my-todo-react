import '../styles/content.css';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export const Content = () => {
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

  return (
    <main className='main'>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
              type='checkbox'
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.description}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role='button'
              tabIndex='0'
              aria-label={`Delete ${item.description}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
