import { useState } from 'react';
import './Filter.css'

function Filter({ colors, brands, price, handleFilterItems }) {
    const [selectedItem, setSelectedItem] = useState({
        color: 'All',
        brand: 'All',
        price: { min: 0, max: Infinity }
    })

    const handleChangeItem = (type, item) => {
        if (type === 'color') {
            setSelectedItem((prevState) => {
                return { ...prevState, color: item }
            })
        } else if (type === 'brand') {
            setSelectedItem((prevState) => {
                return { ...prevState, brand: item }
            })
        } else if (type === 'price') {
            setSelectedItem((prevState) => {
                return {
                    ...prevState, price: { min: item.min, max: item.max }
                }
            })

        }

        handleFilterItems(type, item)
    };

    const items = (type, itemsData) => {

        const isSelected = (item) => {
            switch (type) {
                case 'color':
                    return selectedItem.color === item;
                case 'brand':
                    return selectedItem.brand === item;
                case 'price':
                    return selectedItem.price.min === item.min && selectedItem.price.max === item.max;
                default:
                    return false;
            }
        }; return itemsData.map((item, index) => (
            <div className='items' key={index}>
                <input type="checkbox" onChange={() => handleChangeItem(type, item)} checked={isSelected(item)} />
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
