import './Filter.css'
 
function Filter({ colors, brands, price , handleChangeColor , handleChangeBrand , handleChangePrice}) {

    const handleChangeItem = (type, item) => {
        const handlers = {
            color: handleChangeColor,
            brand: handleChangeBrand,
            price: handleChangePrice,
        };
        handlers[type](item);
    };

    const items = (type , itemsData) => {

        if (itemsData === price) {
            return itemsData.map((item, index) => (
                <div className="items" key={index}>
                    <input type="checkbox" onChange={() => handleChangeItem(type, item)}/>
                    <label>{item.min} to {item.max}</label>
                </div>
            ));
        }

        return itemsData.map((item, index) => (
            <div className='items' key={index}>
                <input type="checkbox" onChange={() => handleChangeItem(type, item)}/>
                <label htmlFor={item}>{item}</label>
            </div>
        ));
    };


    return (
        <div className="filter">
            <span>Filters</span>
            <div className="filterContainer">
                <div className="CatrgoiesName">Color</div>
                <div className="filterItems">
                    {
                        items('color',colors)
                    }
                </div>
                <div className="CatrgoiesName">Brand</div>
                <div className="filterItems">
                    {
                        items('brand',brands)
                    }
                </div>
                <div className="CatrgoiesName">Price</div>
                <div className="filterItems">
                    {
                        items('price',price)
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter;