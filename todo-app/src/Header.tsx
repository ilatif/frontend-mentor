import './Header.css';

function Header(props: { theme: string, updateTheme: () => void }) {
  const {theme, updateTheme} = props;

  return <>
    <div className="header">
      <h1 className="heading">T O D O</h1>
      <a href="#" onClick={(e) => {
        e.preventDefault();
        updateTheme();
      }}>
        <img className="theme-icon" src={`./images/icon-${theme === 'light' ? 'moon' : 'sun'}.svg`} />
      </a>
    </div>
  </>
}

export default Header;