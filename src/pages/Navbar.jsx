import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">#VANLIFE</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
