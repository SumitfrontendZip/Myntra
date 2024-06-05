import { useState } from 'react';
import './Filter.css'

function Filter({ colors, brands, price, handleChangeColor, handleChangeBrand, handleChangePrice }) {

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);


    const handleChangeItem = (type, item) => {
        const handlers = {
            color: handleChangeColor,
            brand: handleChangeBrand,
            price: handleChangePrice,
        };

        if (type === 'color') {
            setSelectedColor(item);
        } else if (type === 'brand') {
            setSelectedBrand(item);
        } else if (type === 'price') {
            setSelectedPrice(item);
        }

        handlers[type](item);
    };

    const items = (type, itemsData) => {

        const selected = type === 'color' ? selectedColor : type === 'brand' ? selectedBrand : selectedPrice;


        if (itemsData === price) {
            return itemsData.map((item, index) => (
                <div className="items" key={index}>
                    <input type="checkbox" onChange={() => handleChangeItem(type, item)} checked={selected === item} />
                    <label>{item.min} to {item.max}</label>
                </div>
            ));
        }

        return itemsData.map((item, index) => (
            <div className='items' key={index}>
                <input type="checkbox" onChange={() => handleChangeItem(type, item)} checked={selected === item} />
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
                        items('color', ['All', ...colors])
                    }
                </div>
                <div className="CatrgoiesName">Brand</div>
                <div className="filterItems">
                    {
                        items('brand', ['All', ...brands])
                    }
                </div>
                <div className="CatrgoiesName">Price</div>
                <div className="filterItems">
                    {
                        items('price', price)
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter;