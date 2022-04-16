import '../styles/content.css';

import { ItemList } from './ItemList';

export const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '50%', fontSize: '3rem' }}>
          Deine Liste ist Leer!
        </p>
      )}
    </>
  );
};
