import SearchBar from '../SeachBar/SearchBar'
import Mainmenu from '../mainMenu/Mainmenu'
import './Navbar.css'
import NavProfile from '../NavProfile/NavProfile'
import logo from './myntra.svg'
import Icon from './menu.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav>

            <img src={Icon} alt='' className='burggerIcon' />
            <Link to='/'><img src={logo} alt="" /></Link>
            <Mainmenu />
            <SearchBar />
            <NavProfile />

        </nav>
    )
}

export default Navbar