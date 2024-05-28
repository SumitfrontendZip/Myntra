import MainMenuItems from '../MainMenuItems/MainMenuItems'
import './Mainmenu.css'
function Mainmenu() {

    const categories = ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio']

    return (
        <div className="mainMenu">
            {categories.map((e, index) => (
                <MainMenuItems key={index} items={e.toUpperCase()} />
            ))}
        </div>

    )
}

export default Mainmenu
