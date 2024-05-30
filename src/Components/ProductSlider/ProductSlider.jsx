import { image1, image2, image3 } from './ProductSliderImage/ProductSliderImage'
import './ProductSlider.css'
import { useState } from 'react'

function ProductSlider() {
    const [slider, setSlider] = useState(0)
    const images = [image1, image2, image3]

    const handleSliderChange = (direction) => {
        setSlider(direction);
    };

    return (
        <div className='productSlider'>
            <div className="imagesCard">
                <div className="cards">
                    {images[slider].map((image, index) => (
                        <img src={image} key={index} />
                    ))}
                </div>
            </div>
            <div className="buttons">
                {images.map((_, index) => (
                    <span key={index} onClick={() => handleSliderChange(index)} className={index === slider ? 'show' : 'show-hidden'}></span>
                ))}
            </div>
        </div>
    )
}

export default ProductSlider