import "bootstrap/dist/css/bootstrap.min.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { useAuth0 } from "@auth0/auth0-react";
import './Navibar.css'

const Navibar = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky">
            <div className="container-fluid">
                <a className="navbar-brand text-light fs-1" href="#">Dash-Pro</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item text-light acc">
                            {isAuthenticated ?

                            <div>Hello, {user?.name}</div>
                                :
                                <div>Hello, <AccountCircleIcon className="fs-1 text-light pb-2" /></div>
                            }
                        </li>
                    </ul>
                    <form className="d-flex me-3">
                        <SearchIcon className="fs-1 me-3 text-light search" />
                        <input type="serach" placeholder="Search here" className="form-control" />
                    </form>
                    {isAuthenticated ?
                        <div >
                            <button className="bg-primary bt" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Logout </button>
                        </div>
                        :
                        <button className="bg-primary bt" onClick={() => loginWithRedirect()}>Login/Sign Up</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navibar