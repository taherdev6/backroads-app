import logo from '../images/logo.svg';
import { NavLinks } from './data.js';
import { NavSocialLinks } from './data.js';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <NavLinks />
        <NavSocialLinks />
        {/* <ul className="nav-links" id="nav-links">
          {navLinks}
        </ul>

        <ul className="nav-icons">{socialLinks}</ul> */}
      </div>
    </nav>
  );
};
export default Navbar;
