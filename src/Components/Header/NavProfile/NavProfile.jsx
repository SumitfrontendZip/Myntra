import profileIcon from './customer.png'
import wishlistIcon from './heart.png'
import bagIcon from './bag.png'
import './Navprofile.css'
import NavProfileItems from '../NavProfileItems/NavProfileItems'


function NavProfile() {
    const ProfileItems = [
        { itemName: 'Profile', icon: profileIcon, navigateTo: '/' },
        { itemName: 'Wishlist', icon: wishlistIcon, navigateTo: '/' },
        { itemName: 'Bag', icon: bagIcon, navigateTo: '/placeOrder' },
    ];


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
