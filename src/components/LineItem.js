import { FaTrashAlt } from 'react-icons/fa';

export const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: 'line-through' } : null}
      >
        {item.description}
      </label>
      <FaTrashAlt
        role='button'
        tabIndex='0'
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.description}`}
      />
    </li>
  );
};
