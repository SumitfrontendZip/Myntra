import CardData from "./ProductImages/ProductImages";
import './ProductCards.css'
import star from './star.png'
function ProductCards() {

    const card = (card, idx) => {
        return (
            <div className="productCard" key={idx}>
                <div className="imgSection">
                    <img src={card.img} alt="Card image cap" className="productImage" />
                </div>
                <div className="productName">{card.name}</div>
                <div className="productMaterial">Material: {card.material}</div>
                <div className="priceSection">
                    <span className="price">₹{card.price}</span>
                    <span className="discountedPrice">₹{card.discountPrice}</span>
                    <span className="totalOff">({Math.floor((card.price / card.discountPrice) * 100)}%)</span>
                </div>
                <span className="rating">
                    {
                        Array.from({ length: card.rating }).map((_, index) => (
                            <img src={star} alt="star" key={index} />
                        ))
                    }
                </span>
            </div>
        )
    }

    return (
        <div className="productCards">
            {
                CardData.map((item, idx) => {
                    return card(item, idx)
                })
            }
        </div>
    )
}
export default ProductCards;