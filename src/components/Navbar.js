import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">TV SHOWS DETAILS
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <Link class="btnhome" to="/"><b>HOME</b></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
