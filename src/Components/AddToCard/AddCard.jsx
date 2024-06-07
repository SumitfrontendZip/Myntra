import CardData from '../ProductImages/ProductImages'

export const AddCard = ({ card, size }) => {
    console.log(card);

    const sizeChart = [36, 38, 40, 42, 44, 46]
    const defaultSize = sizeChart.includes(size) ? size : 'SIZE';
    const qtyOption = [1, 2, 3, 4, 5];


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
                    <select id="size-select" className='card' defaultValue={defaultSize}>
                        {sizeChart.map((val, idx) => (<option value={val} key={idx}>SIZE: {val}</option>))}
                    </select>
                    <select className='card'>
                        {
                            qtyOption.map((val, idx) => (<option value="SIZE" key={idx}>QTY: {val}</option>))
                        }
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
