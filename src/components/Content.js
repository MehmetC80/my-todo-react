import { ItemList } from './ItemList';

export const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className='main'>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Deine Liste ist Leer!</p>
      )}
    </main>
  );
};
