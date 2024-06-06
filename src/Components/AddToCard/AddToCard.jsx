import './AddToCard.css'
export const AddToCard = () => {
    return (
        <div className='addToCard'>
            <section>
                <div className="deliverySection">
                    <span>Deliver to : <span className='deliveryCode'>{ 244001}</span></span>
                    <button>Change Address</button>
                </div>
                <div className="offerSection">
                    <span><img src="" alt="" /><span>Available Offers</span></span>
                    <span>10% Instant Discount on SBI Credit Card and Credit Card EMI transactions on min. spend of ₹3,500. TCA</span>
                </div>
                <div className="removeSection">
                    <span>
                        <input type="checkbox" />
                        <label htmlFor="selected">{ }/{ } ITEMS SELECTED</label>
                    </span>
                    <span>
                        <button className="remove">REMOVE</button>
                        <button className="moveToWishlist">MOVE TO WISHLIST</button>
                    </span>
                </div>
                <div className="placeOrderCard">
                    <input type="checkbox" />
                    <div className="cardContent">
                        <span className="name">The Bear</span>
                        <span className="brandName">Brandf</span>
                        <span className="color">Red</span>
                        <button className="size">
                            SIZE : { }
                        </button>
                        <button className="size">
                            QTY : { }
                        </button>
                        <div className="priceSection">
                            <span className="price">₹{}</span>
                            <span className="discountedPrice">₹{}</span>
                            <span className="totalOff">%</span>
                        </div>
                        <span>
                            <img src="" alt="" />
                            <span><span>7 Days</span> return Available</span>
                        </span>
                        <span>
                            <img src="" alt="" />
                            <span>Delivery between {}</span>
                        </span>
                    </div>
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
