import CardData from '../ProductImages/ProductImages'


export const AddCard = () => {
    const card = CardData[0]

    return (
        <div className="placeOrderCard">
            <div className="productImage">
                <input type="checkbox" />
                <img src={card.img} alt="" />
            </div>
            <div className="cardContent">
                <span className="cardName">{card.name}</span>
                <span className="cardBrandName">{card.brand}</span>
                <span className="cardColor">Color : {card.color}</span>
                <span className="sizeCard">
                    <select className='card'>
                        <option value="SIZE">SIZE: {36}</option>
                        <option value="SIZE">SIZE: {38}</option>
                        <option value="SIZE">SIZE: {40}</option>
                        <option value="SIZE">SIZE: {42}</option>
                        <option value="SIZE">SIZE: {44}</option>
                        <option value="SIZE">SIZE: {46}</option>
                    </select>
                    <select className='card'>
                        <option value="SIZE">QTY: 1</option>
                        <option value="SIZE">QTY: 2</option>
                        <option value="SIZE">QTY: 3</option>
                        <option value="SIZE">QTY: 4</option>
                        <option value="SIZE">QTY: 5</option>
                    </select>
                </span>
                <div className="priceSection">
                    <span className="price">₹{card.price}</span>
                    <span className="discountedPrice">₹{card.discountPrice}</span>
                    <span className="totalOff">({Math.floor((card.discountPrice - card.price) / (card.discountPrice) * 100)}%)</span>
                </div>
                <span className='returnContent'>
                    <img src="" alt="" />
                    <span><span>7 Days</span> return Available</span>
                </span>
            </div>
            <span className='cross'>
                +
            </span>
        </div>
    )
}
