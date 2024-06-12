import { useState } from 'react';
import './Filter.css'

function Filter({ colors, brands, price, handleFilterItems }) {
    const [selectedItem, setSelectedItem] = useState(null)

    const handleChangeItem = (type, item) => {
        const handlers = { type: handleFilterItems() };
        console.log(type);
        if (type === 'color') {
            setSelectedItem(item);
        } else if (type === 'brand') {
            setSelectedItem(item);
        } else if (type === 'price') {
            setSelectedItem(item);
        }

        handlers[type](item);
    };

    const items = (type, itemsData) => {

        const selected = type === 'color' ? selectedItem : type === 'brand' ? selectedItem : selectedItem;

        return itemsData.map((item, index) => (
            <div className='items' key={index}>
                <input type="checkbox" onChange={() => handleChangeItem(type, item)} checked={selected === item} />
                {
                    type === 'price' ? <label>{item.min} to {item.max}</label> : <label>{item}</label>
                }
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