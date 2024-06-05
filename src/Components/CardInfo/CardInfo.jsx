import CardData from "../ProductImages/ProductImages";
import star from './star.png'
import heart from './heart.png'
import bag from './bag.png'
import './CardInfo.css'
function CardInfo() {
    return (
        <div className="card-Container">
            <img src={CardData[0].img} alt="" />
            <div className="card-details">
                <span className="brandName">{CardData[0].brand}</span>
                <span className="name">{CardData[0].name}</span>
                <span className="rating">
                    {
                        Array.from({ length: CardData[0].rating }).map((_, index) => (
                            <img src={star} alt="star" key={index} />
                        ))
                    }
                </span>
                <div className="priceSection">
                    <span className="price">₹{CardData[0].price}</span>
                    <span className="discountedPrice">₹{CardData[0].discountPrice}</span>
                    <span className="totalOff">({Math.floor((CardData[0].price / CardData[0].discountPrice) * 100)}%)</span>
                </div>
                <label htmlFor="Color">Color : </label>
                <span className="color">sd</span>
                <div className="sizeChart">
                    <span className="size">36</span>
                    <span className="size">38</span>
                    <span className="size">40</span>
                    <span className="size">42</span>
                    <span className="size">44</span>
                    <span className="size">46</span>
                </div>
                <button>
                    <img src={bag} alt="" />
                    <span>ADD TO BAG</span>
                </button>
                <button>
                    <img src={heart} alt="" />
                    <span>WHISLIST</span>
                </button>
                <span>DELIVERY OPTIONS</span>
                <div className="delivaryOptions">
                    <input type="text" />
                    <span>check</span>
                </div>
                <span>Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
            </div>
        </div>
    )
}

export default CardInfo;