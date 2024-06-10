import './AddToCard.css'
import { AddCard } from './AddCard'
import discountIcon from './discount.png'
import offerIcon from './offer.png'
import { useState } from 'react'


const AddToCard = ({ deliveryCode, handleNotificationBar }) => {
    let addCardDataLocalStorage = JSON.parse(localStorage.getItem('addToCardData')) || [];
    const discountMRP = addCardDataLocalStorage.reduce((total, val) => total + val.card.price, 0);
    const totalMRP = addCardDataLocalStorage.reduce((total, val) => total + val.card.discountPrice, 0)
    const totalUnit = addCardDataLocalStorage.length
    const [cartItems, setCartItems] = useState(addCardDataLocalStorage);
    const [inputValueDeliver, setInputValueDeliver] = useState(false)
    const [qtyItem, setQtyItem] = useState(1)


    const handleRemoveCard = (id) => {
        if (id === 'removeAllElements') {
            setCartItems([]);
            localStorage.removeItem('addToCardData');
            handleNotificationBar(id);
            return;
        }
    
        const indexToRemove = cartItems.findIndex(item => item.id === id);
    
        console.log(indexToRemove);
    
        if (indexToRemove !== -1) {
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);
            localStorage.setItem('addToCardData', JSON.stringify(updatedCartItems));
        }
    
        handleNotificationBar(id);
    }
    

console.log(cartItems);

const handleChangeAddress = () => {
    setInputValueDeliver(true)
    deliveryCode = ''
}

const handleChangeQty = (e) => {
    setQtyItem(e.target.value)
}

return (
    <div className='addToCard'>
        <section>
            <div className="deliverySection">
                <span>Deliver to : <span className='deliveryCode'>
                    {deliveryCode === '' && inputValueDeliver ? (
                        <input type='text' />
                    ) : (
                        <span>{deliveryCode}</span>
                    )}
                </span></span>
                <button onClick={() => handleChangeAddress()}>Change Address</button>
            </div>
            <div className="offerSection">
                <span><img src={discountIcon} alt="" /><span>Available Offers</span></span>
                <span>10% Instant Discount on SBI Credit Card and Credit Card EMI transactions on min. spend of ₹3,500. TCA</span>
            </div>
            <div className="removeSection">
                <span>
                    <input type="checkbox" />
                    <label htmlFor="selected">{0}/{totalUnit} ITEMS SELECTED</label>
                </span>
                <span>
                    <span className='remove' onClick={() => handleRemoveCard('removeAllElements')}>REMOVE</span>
                    <span className='remove'>MOVE TO WISHLIST</span>
                </span>
            </div>
            <div className="wrapCards">
                {
                    cartItems.map((val, index) => (<AddCard id={val.id} handleChangeQty={handleChangeQty} handleRemoveCard={handleRemoveCard} key={index} card={val.card} size={val.size} />))
                }
            </div>
        </section>
        <section>
            <span>COUPONS</span>
            <span className="coupoundApply">
                <img src={offerIcon} alt="" />
                <span>Apply Coupons</span>
                <button>APPLY</button>
            </span>
            <div className="couponsDesc">
                <span>Login</span>
                <span> to get upto 500 OFF on first order.</span>
            </div>
            <div className='priceTag'>PRICE DETAILS {totalUnit} ITEMS</div>
            <div className="bill">
                <div className="billList">
                    <span>Total MRP</span>
                    <span>Discount on MRP</span>
                    <span>Coupon Discount</span>
                    <span>Platform Fee </span>
                    <span>Shipping Fee</span>
                </div>
                <div className="billList">
                    <span>{totalMRP * qtyItem}</span>
                    <span>-{(totalMRP - discountMRP) * qtyItem}</span>
                    <span>Apply Coupoun</span>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>

            <div className="amount">
                <span>Total Amount</span>
                <span>{discountMRP * qtyItem}</span>
            </div>
            <button onClick={() => alert('thank you')}>Place Order</button>
        </section>
    </div>
)
}
export default AddToCard;