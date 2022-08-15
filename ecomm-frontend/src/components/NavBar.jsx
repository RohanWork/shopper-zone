import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";

const { Fragment } = require("react");

function NavBar(){
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin)
    console.log("Cart ",state.cart) 
    return (
        <Fragment>
            <div className="clearfix"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky mb-0" style={{top:0,zIndex:"1000"}}>
                <Link className="navbar-brand" to="#">E-Shop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Men
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cat/Men/Upper Wear">Upper Wear</Link>
                        <Link className="dropdown-item" to="/cat/Men/Bottom Wear">Bottom Wear</Link>                        
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Women
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cat/Women/Upper Wear">Upper Wear</Link>
                        <Link className="dropdown-item" to="/cat/Women/Bottom Wear">Bottom Wear</Link>                        
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kids
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cat/Kids/Upper Wear">Upper Wear</Link>
                        <Link className="dropdown-item" to="/cat/Kids/Bottom Wear">Bottom Wear</Link>                        
                        </div>
                    </li>
                    </ul>
                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />                    
                </div>
                </nav>
        </Fragment>
    )
}

export default NavBar;
