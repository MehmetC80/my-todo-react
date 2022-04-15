import '../styles/footer.css';

export const Footer = ({ length }) => {
  return (
    <footer className='footer'>
      <p>
        Anzahl Todos {length} {length === 1 ? 'Todo' : 'Todos'}
      </p>
    </footer>
  );
};
