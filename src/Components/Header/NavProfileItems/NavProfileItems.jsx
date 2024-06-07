import { useState } from 'react'
import ListingItems from './ListingItems'
import './NavProfileItems.css'
import { Link } from 'react-router-dom'
function NavProfileItems({ items }) {
    const categories1 = ['Orders', 'WhishList', 'Gift Cards', 'Contact Us', 'Myntra Insider']
    const categories2 = ['Myntra Credit', 'Coupouns', 'Saved Cards', 'Saved VPA', 'Saved Addresses']

    const [isProfileHovered, setIsProfileHovered] = useState(false)

    const handleMouseEnter = () => {
        if (items.itemName === 'Profile') {
            setIsProfileHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (items.itemName === 'Profile') {
            setIsProfileHovered(false);
        }
    };


    return (
        <>
            <div
                className="navProfileItems"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={items.img} alt="" />
                <span>{
                    items.itemName
                }</span>
                <div className={`components-container ${isProfileHovered ? 'show' : ''}`}>
                    {
                        isProfileHovered && (
                            <div className="profileSection">
                                <div className="profileSectionLeft">
                                    <h3>Welcome</h3>
                                    <span>To Access account and Mange Orders</span>
                                    <button>Login/SignUp</button>
                                </div>
                                <hr />
                                <div className="profileSectionLeft">
                                    {
                                        categories1.map((item, index) =>
                                        (
                                            <ListingItems key={index} value={item} />
                                        )
                                        )
                                    }

                                </div>
                                <hr />
                                <div className="profileSectionLeft">
                                    {
                                        categories2.map((item, index) =>
                                        (
                                            <ListingItems key={index} value={item} />
                                        )
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default NavProfileItems
