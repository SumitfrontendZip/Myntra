import { image1, image2, image3 } from './ProductSliderImage/ProductSliderImage'
import './ProductSlider.css'

function ProductSlider() {
    const images = [image1, image2, image3]
    return (
        <div className='productSlider'>
            <div className="imagesCard">
                <div className="cards">
                    {
                        image1.map((image, index) => (<img src={image} key={index} />))
                    }
                </div>
                <div className="cards">
                    {
                        image1.map((image, index) => (<img src={image} key={index} />))
                    }
                </div>
                <div className="cards">
                    {
                        image1.map((image, index) => (<img src={image} key={index} />))
                    }
                </div>
            </div>
            <div className="buttons">
                {
                    images.map((_, index) => (<span key={index}></span>))
                }
            </div>
        </div>
    )
}

export default ProductSlider