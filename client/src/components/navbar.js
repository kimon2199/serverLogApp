import '../App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';


function Navbar(props) {
  const [dropdown, setDropdown] = useState('Server Type');

  const changeField = (f1,f2) => {
    props.setSearchKey(f1);
    setDropdown(f2);
  }

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
            </ul>
            <form className="d-flex">
                <div className="nav-item dropdown">
                <div className="nav-link dropdown-toggle"   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {dropdown}
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li onClick={() => changeField('server_type','Server Type')}><div className="dropdown-item">Server Type</div></li>
                    <li onClick={() => changeField('host','Host')}><div className="dropdown-item">Host</div></li>
                    <li onClick={() => changeField('hostname','Hostname')}><div className="dropdown-item">Hostname</div></li>
                    <li onClick={() => changeField('os','OS')}><div className="dropdown-item">OS</div></li>
                    <li onClick={() => changeField('ip','IP')}><div className="dropdown-item">IP</div></li>
                    <li onClick={() => changeField('disk','Disk')}><div className="dropdown-item">Disk</div></li>
                    <li onClick={() => changeField('datastore','Datastore')}><div className="dropdown-item">Datastore</div></li>
                    <li onClick={() => changeField('ram','Ram')}><div className="dropdown-item">Ram</div></li>
                    <li onClick={() => changeField('cores','Cores')}><div className="dropdown-item">Cores</div></li>
                    <li onClick={() => changeField('vlan','VLAN')}><div className="dropdown-item">VLAN</div></li>
                    <li onClick={() => changeField('sw','SW')}><div className="dropdown-item">SW</div></li>
                    <li onClick={() => changeField('physical_port','Physical Port')}><div className="dropdown-item">Physical Port</div></li>
                </ul>
                </div>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e)=> props.setSearchTerm(e.target.value)}/>
                <div className="btn btn-outline-success" type="submit">Search</div>
            </form>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
