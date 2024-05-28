import './Mainmenu.css'
function Mainmenu() {

    const data = ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio']

    return (
        <div className="mainMenu">
            {data.map((e, index) => (<div key={index} className="navItems">{e.toUpperCase()}</div>))}
        </div>

    )
}

export default Mainmenu
