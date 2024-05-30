import { image1, image2, image3 } from './ProductSliderImage/ProductSliderImage'
import './ProductSlider.css'
function ProductSlider() {

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
                        image2.map((image, index) => (<img src={image} key={index} />))
                    }
                </div>
                <div className="cards">
                    {
                        image3.map((image, index) => (<img src={image} key={index} />))
                    }
                </div>
            </div>
            <div className="buttons"></div>
        </div>
    )
}

export default ProductSlider