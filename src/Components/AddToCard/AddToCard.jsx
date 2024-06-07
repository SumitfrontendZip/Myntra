import './AddToCard.css'
import { AddCard } from './AddCard'
import discountIcon from './discount.png'
import offerIcon from './offer.png'

export const AddToCard = () => {
    const addCardDataLocalStorage = JSON.parse(localStorage.getItem('addToCardData')) || [];
    
    return (
        <div className='addToCard'>
            <section>
                <div className="deliverySection">
                    <span>Deliver to : <span className='deliveryCode'>{244001}</span></span>
                    <button>Change Address</button>
                </div>
                <div className="offerSection">
                    <span><img src={discountIcon} alt="" /><span>Available Offers</span></span>
                    <span>10% Instant Discount on SBI Credit Card and Credit Card EMI transactions on min. spend of ₹3,500. TCA</span>
                </div>
                <div className="removeSection">
                    <span>
                        <input type="checkbox" />
                        <label htmlFor="selected">{1}/{1} ITEMS SELECTED</label>
                    </span>
                    <span>
                        <span className='remove'>REMOVE</span>
                        <span className='remove'>MOVE TO WISHLIST</span>
                    </span>
                </div>
                <div className="wrapCards">
                    {
                        addCardDataLocalStorage.map((val, index) => (<AddCard key={index} card={val.card} size={val.size}/>))
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
                <div className='priceTag'>PRICE DETAILS {2} ITEMS</div>
                <div className="bill">
                    <div className="billList">
                        <span>Total MRP</span>
                        <span>Discount on MRP</span>
                        <span>Coupon Discount</span>
                        <span>Platform Fee </span>
                        <span>Shipping Fee</span>
                    </div>
                    <div className="billList">
                        <span>100</span>
                        <span>100</span>
                        <span>100</span>
                        <span>100</span>
                        <span>100</span>
                    </div>
                </div>

                <div className="amount">
                    <span>Total Amount</span>
                    <span>546</span>
                </div>
                <button>Place Order</button>
            </section>
        </div>
    )
}
