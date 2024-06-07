import CardData from "../ProductImages/ProductImages";
import star from './star.png'
import heart from './heart.png'
import bag from './bag.png'
import './CardInfo.css'
import bus from './bus.png'
import { useParams } from "react-router-dom";
import { useState } from "react";
function CardInfo({ handleAddToCardButton }) {

    const [size, setSize] = useState(undefined)
 
    const sizeChat = [36, 38, 40, 42, 44, 46]

    const { brand, name } = useParams();
    const card = CardData.find(card => card.brand === brand && card.name === name)

    if (!card) return <div>Product Not Found</div>

    const handleItemClick = (val) => {
        setSize(val);
    };

    return (
        <div className="card-Container">
            <span className="ImgSection"><img src={card.img} alt="" /></span>
            <div className="card-details">
                <span className="brandName">{card.brand}</span>
                <span className="name">{card.name}</span>
                <span className="rating">
                    {
                        Array.from({ length: card.rating }).map((_, index) => (
                            <img src={star} alt="star" key={index} />
                        ))
                    }
                </span>
                <div className="priceSection">
                    <span className="price">₹{card.price}</span>
                    <span className="discountedPrice">₹{card.discountPrice}</span>
                    <span className="totalOff">({Math.floor((card.discountPrice - card.price) / (card.discountPrice) * 100)}%)</span>
                </div>
                <span className="Color">Color : {card.color} </span>
                <span className="selectSize">SELECT SIZE</span>
                <div className="sizeChart">
                    {
                        sizeChat.map((val, idx) => (<span className="size" key={idx} style={val===size ? {background:'rgb(243, 91, 91)'} : {background:'white'} } onClick={() => (handleItemClick(val))}>{val}</span>))
                    }
                </div>
                <div className="buttons">
                    <button onClick={() => handleAddToCardButton(card, size)}>
                        <img src={bag} alt="" />
                        <span>ADD TO BAG</span>
                    </button>
                    <button >
                        <img src={heart} alt="" />
                        <span>WHISLIST</span>
                    </button>
                </div>
                <span className="deliveryText">DELIVERY OPTIONS <img src={bus} alt="bus" className="busIcon" /></span>
                <div className="delivaryOptions">
                    <input type="text" />
                    <span>check</span>
                </div>
                <span className="deliveryPinText">Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
            </div>
        </div>
    )
}

export default CardInfo;