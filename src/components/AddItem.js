import { FaPlus } from 'react-icons/fa';
import '../styles/addItem.css';
import { useRef } from 'react';

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Todo hinzufügen</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Todo hinzufügen'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        type='submit'
        aria-label='Todo hinzufügen'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};
