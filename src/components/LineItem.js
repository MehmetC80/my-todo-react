import { FaTrashAlt } from 'react-icons/fa';

export const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
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
  );
};
