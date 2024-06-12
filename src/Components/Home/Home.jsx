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
        { min: 1000, max: 4999 },
        { min: 5000, max: '5001+' }
    ]

    const handleFilterItems = (type, item) => {
        const updatedFilterData = {
            ...filterData,
            [type]: type === 'price' ? { min: item.min, max: item.max } : item
        };

        setFilterData(updatedFilterData);
        const filteredProducts = CardData.filter((product) => {
            const matchesColor = updatedFilterData.color === 'All' || product.color === updatedFilterData.color;
            const matchesBrand = updatedFilterData.brand === 'All' || product.brand === updatedFilterData.brand;
            const matchesPrice = product.price >= updatedFilterData.price.min && product.price <= updatedFilterData.price.max;

            return matchesColor && matchesBrand && matchesPrice;
        });

        setProductData(filteredProducts);
    }
    console.log(productData);
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
