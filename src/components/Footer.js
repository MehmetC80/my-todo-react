export const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>published by mehmet cetinkaya {date.getFullYear}</p>
    </footer>
  );
};
