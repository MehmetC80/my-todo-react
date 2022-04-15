import '../styles/searchItem.css';

export const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='search'>Suchen</label>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Todo suchen'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
