import '../styles/header.css';
export const Header = ({ title, subTitle }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  );
};

Header.defaultProps = { title: 'PNA', subTitle: '' };
