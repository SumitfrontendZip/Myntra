import { useEffect, useState } from 'react';
import './App.css';
import CardData from './Components/ProductImages/ProductImages';
import Category from './Components/Category/Category';
import Filter from './Components/FIlters/Filter';
import Navbar from './Components/Header/Navbar/Navbar';
import ProductCards from './Components/ProductCards/ProductCards';
import ProductSlider from './Components/ProductSlider/ProductSlider';

function App() {
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

  const [productData, setProductData] = useState(CardData)
  const [colorChange, setColorChange] = useState([])
  const [brandChange, setBrandChange] = useState([])
  const [priceChange, setPriceChange] = useState([])

  const handleChangeColor = (item) => {
    let newValue = CardData.filter((prevData) => {
      return item === prevData.color
    })
    setColorChange(newValue)
  }

  const handleChangeBrand = (item) => {
    let newValue = CardData.filter((prevData) => {
      return item === prevData.brand
    })
    setBrandChange(newValue)
  }

  const handleChangePrice = (item = { min: 0, max: Infinity }) => {
    let newValue = CardData.filter((prevData) => {
      return prevData.price >= item.min && prevData.price <= item.max;
    });
    setPriceChange(newValue)
  }

  useEffect(() => {
    if(brandChange.length>0) setProductData([...brandChange])
    if(colorChange.length>0) setProductData([...colorChange])
    if(priceChange.length>0) setProductData([...priceChange])
  }, [brandChange , colorChange , priceChange])
  

  return (
    <>
      {/* <Navbar />
            <ProductSlider />
            <Category /> */}
      <div className="productFilter">
        <Filter
          colors={colors}
          brands={brands}
          price={price}
          handleChangeColor={handleChangeColor}
          handleChangeBrand={handleChangeBrand}
          handleChangePrice={handleChangePrice}
        />
        <ProductCards CardData={productData} />
      </div>
    </>
  );
}

export default App;
