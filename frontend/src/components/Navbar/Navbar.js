import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <Link to="/" activeClassName="active_link" href="#">
          Sale Representative
        </Link>
        {/* <a className="active_link" href="#">Sale Representative</a> */}
        <Link to="/rmain" activeClassName="active_link" href="#">
          Retailer
        </Link>
      </div>
      {/* <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
