import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          My Portfolio
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
