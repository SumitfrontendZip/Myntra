import Mainmenu from '../mainMenu/Mainmenu'
import './Navbar.css'
import logo from './myntra.svg'
function Navbar() {
    return (
        <nav>
            <img src={logo} alt="" />
            <Mainmenu />
            <div></div>
            <div></div>
        </nav>
    )
}

export default Navbar