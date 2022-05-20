import '../App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { sql_head, titles } from '../commonVariablesReact';


function Navbar(props) {

  const [dropdown, setDropdown] = useState('Server Type');

  const changeField = (f1,f2) => {
    props.setSearchKey(f1);
    setDropdown(f2);
  }

  return (
    <nav className="navbar navbar-expand-lg glass1 sticky-top" style={{borderRadius: '0px'}}>
        <div className="container-fluid">
            <div className="navbar-brand nav-font">Navbar</div>
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
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-purple" aria-labelledby="navbarDropdown">
                            { titles.slice(0,titles.length).map((item,index)=>{
                                return (<li key={"dr"+index} onClick={() => changeField(sql_head[index],item)}><div className="dropdown-item">{item}</div></li>);})
                            }
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
