import InputBox from '../InputBox/InputBox'
import Mainmenu from '../mainMenu/Mainmenu'
import './Navbar.css'
import NavProfile from '../NavProfile/NavProfile'
import logo from './myntra.svg'
function Navbar() {
    return (
        <nav>
            <img src={logo} alt="" />
            <Mainmenu />
            <InputBox/>
            <NavProfile />
            
        </nav>
    )
}

export default Navbar