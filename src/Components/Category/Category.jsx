import shopCategory from './shopCategory.png'
import './Category.css'
import Images from './CategoryImages/CategoryImages'
function Category() {
    console.log(Images);
    return (
        <div>
            <div className="shopCategory">
                <img src={shopCategory} alt="" />
            </div>
            <div className="categoryCards">
                {
                    Images.map((image,index)=>{
                        return(
                            <img src={image} alt={image} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
