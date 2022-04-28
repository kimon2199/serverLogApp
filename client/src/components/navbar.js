import '../App.css';
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg glass0" style={{borderRadius: '0px'}}>
        <div className="container-fluid">
            <div className="navbar-brand nav-font"  >Navbar</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Insert</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logs">Past Logs</Link>
                </li>
                <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle"   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><div className="dropdown-item">Action</div></li>
                    <li><div className="dropdown-item">Another action</div></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><div className="dropdown-item">Something else here</div></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
