import profile from './customer.png'
import wishlist from './heart.png'
import bag from './bag.png'
import './Navprofile.css'
function NavProfile() {
    return (
        <div className='navProfile'>
            <div className="navProfileItems">
                <img src={profile} alt="" />
                <span>Profile</span>
            </div>
            <div className="navProfileItems">
                <img src={wishlist} alt="" />
                <span>Whishlist</span>
            </div>
            <div className="navProfileItems">
                <img src={bag} alt="" />
                <span>Bag</span>
            </div>
        </div>
    )
}

export default NavProfile
