import { image1, image2, image3 } from './ProductSliderImage/ProductSliderImage'
import './ProductSlider.css'
import { useRef, useState } from 'react'

function ProductSlider() {
    const [slider, setSlider] = useState(0)
    const images = [image1, image2, image3]
    const imageRefs = images.map(() => useRef())

    const handleSliderChange = (index) => {
        setSlider(index);
        imageRefs[index].current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };



    return (
        <div className='productSlider'>
            <div className="imagesCard">
                {
                    images.map((imgArr, idx)=> (
                        <div className="cards" key={idx} ref={imageRefs[idx]}>
                            {imgArr.map((image, index) => (
                                <img src={image} key={index} />
                            ))}
                        </div>
                        ))
                }
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