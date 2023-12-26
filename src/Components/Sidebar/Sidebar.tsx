import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import CategoryIcon from '@material-ui/icons/Category';

import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='container-fluid'>
            <div className='sidebar'>
                <ul className='list'>
                    <Link to='/'><li><DashboardIcon className='me-2' />Dashboard</li></Link>
                    <Link to='/profile_form'>  <li><PeopleIcon className='me-2' />Profile form</li> </Link>
                    <Link to='/calendar'>  <li><CategoryIcon className='me-2' />Calendar</li>           </Link>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar