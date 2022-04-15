import { FaPlus } from 'react-icons/fa';
import '../styles/addItem.css';
export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Todo hinzufügen</label>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Todo hinzufügen'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button type='submit' aria-label='Todo hinzufügen'>
        <FaPlus />
      </button>
    </form>
  );
};
