import './AddToCard.css'
import { AddCard } from './AddCard'
import discountIcon from './discount.png'

export const AddToCard = () => {
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
                    <AddCard />
                </div>
            </section>
            <section>
                <span>COUPONS</span>
                <span className="coupoundApply">
                    <img src="" alt="" />
                    <span>Apply Coupons</span>
                    <button>APPLY</button>
                </span>
                <hr />
                <div className="bill">
                    <div className="billList">
                        <span>Total MRP</span>
                        <span>Discount on MRP</span>
                        <span>Coupon Discount</span>
                        <span>Platform Fee </span>
                        <span>Shipping Fee</span>
                    </div>
                    <div className="billValue">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <hr />
                <div className="amount">
                    <span>Total Amount</span>
                    <span>546</span>
                </div>
                <button>Place Order</button>
            </section>
        </div>
    )
}
