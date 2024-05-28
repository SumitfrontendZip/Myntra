import './NavProfileItems.css'
function NavProfileItems({ items }) {
    return (
        <>
            <div className="navProfileItems">
                <img src={items.img} alt="" />
                <span>{items.itemName}</span>
                {
                    items.itemName === 'Profile' && (
                        <div className="profileSection">
                            <div className="profileSectionLeft">
                                <h3>Welcome</h3>
                                <span>To Access account and Mange Orders</span>
                                <button>Login/SignUp</button>
                                <hr />
                            </div>
                            <div className="profileSectionLeft"></div>
                            <div className="profileSectionLeft"></div>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default NavProfileItems
