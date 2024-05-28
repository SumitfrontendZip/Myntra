import { useState } from 'react'
import ListingItems from './ListingItems'
import './NavProfileItems.css'
function NavProfileItems({ items }) {
    const categories1 = ['Orders', 'WhishList', 'Gift Cards', 'Contact Us', 'Myntra Insider']
    const categories2 = ['Myntra Credit', 'Coupouns', 'Saved Cards', 'Saved VPA', 'Saved Addresses']

    const [hover, setHover] = useState(false)
    console.log(hover);

    return (
        <>
            <div
                className="navProfileItems"
                onMouseEnter={() => items.itemName === 'Profile' && setHover(true)}
                onMouseLeave={() => items.itemName === 'Profile' && setHover(false)}
            >
                <img src={items.img} alt="" />
                <span>{items.itemName}</span>
                {
                   hover && (
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

        </>
    )
}

export default NavProfileItems
