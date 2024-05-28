import profile from './customer.png'
import wishlist from './heart.png'
import bag from './bag.png'
import './Navprofile.css'
import NavProfileItems from '../NavProfileItems/NavProfileItems'
function NavProfile() {
    const ProfileItems = [
        { itemName: 'Profile', img: profile },
        { itemName: 'Wishlist', img: wishlist },
        { itemName: 'Bag', img: bag }
    ]
    return (
        <div className='navProfile'>
            {
                ProfileItems.map((value, index) => (
                    <NavProfileItems key={index} items={value} />
                ))
            }
        </div>
    )
}

export default NavProfile
