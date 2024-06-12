import { useState } from 'react';
import CardData from '../ProductImages/ProductImages';
import Category from '../Category/Category';
import Filter from '../FIlters/Filter';
import ProductCards from '../ProductCards/ProductCards';
import ProductSlider from '../ProductSlider/ProductSlider';

export const Home = () => {
    const [productData, setProductData] = useState(CardData)
    const [filterData, setFilterData] = useState({
        color: 'All',
        brand: 'All',
        price: { min: 0, max: Infinity }
    });


    const getUniqueVal = (property) => {
        let newValue = CardData.map((curEle) => curEle[property])
        return [... new Set(newValue)]
    }

    const colors = getUniqueVal('color')
    const brands = getUniqueVal('brand')

    const price = [
        { min: 0, max: 500 },
        { min: 501, max: 999 },
        { min: 1000, max: 5000 },
        { min: 5001, max: '5001+' }
    ]

    const handleFilterItems = (type, items) => {
        setFilterData(() => {
            if ('color' === type) {
                return filterData.color = items
            }
            if ('brand' === type) {
                return filterData.brand = items
            }
            // filterData.price.min = items.min
            // filterData.price.max = items.max
        })

        console.log(filterData);

        // let newValue = CardData.filter((product) => {
        //     const matchesColor = filterData.color === 'All' || product.color === filterData.color;
        //     const matchesBrand = filterData.brand === 'All' || product.brand === filterData.brand;
        //     const matchesPrice = product.price >= filterData.price.min && product.price <= filterData.price.max;
        //     return matchesColor && matchesBrand && matchesPrice;
        // });
        // console.log(newValue);
        // setProductData(newValue);
    }

    return (
        < >
            <ProductSlider />
            <Category />
            <div className="productFilter">
                <Filter
                    colors={colors}
                    brands={brands}
                    price={price}
                    handleFilterItems={handleFilterItems}
                />
                <ProductCards CardData={productData} />
            </div>
        </>
    )
}
