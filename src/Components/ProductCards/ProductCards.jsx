import './ProductCards.css'
import star from './star.png'
import newIcon from './new.png'
import { Link } from 'react-router-dom'
function ProductCards({ CardData }) {
    const card = (card, idx) => {
        return (
            <Link to={`/${card.brand}/${card.name}`} key={idx}>
                <div className="productCard"  >
                    {
                        card.new && (
                            <img src={newIcon} alt="newIcon" className="newIcon" />
                        )
                    }
                    <div className="imgSection">
                        <img src={card.img} alt="Card image cap" className="productImage" />
                    </div>
                    <div className="productName">{card.name}</div>
                    <div className="productMaterial">Material: {card.material}</div>
                    <div className="priceSection">
                        <span className="price">₹{card.price}</span>
                        <span className="discountedPrice">₹{card.discountPrice}</span>
                        <span className="totalOff">({Math.floor((card.discountPrice - card.price) / (card.discountPrice) * 100)}%)</span>
                    </div>
                    <span className="rating">
                        {
                            Array.from({ length: card.rating }).map((_, index) => (
                                <img src={star} alt="star" key={index} />
                            ))
                        }
                    </span>
                </div>
            </Link>
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