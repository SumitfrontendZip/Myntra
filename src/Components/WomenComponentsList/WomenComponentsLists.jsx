import ListItems from '../ListItem/ListItems'

function WomenComponentsLists() {
    const IndianandFusionWear = ['Kurtas & Suits', 'Kurtis', 'Tunics & Tops', 'Sarees', 'Ethnic Wear', 'Leggings', 'Salwars & Churidars', 'Skirts & Palazzos', 'Dress Materials', 'Lehenga Cholis', 'Dupattas & Shawls', 'Jackets']
    const WesternWear = ['Dresses', 'Tops', 'Tshirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Co-ords', 'Playsuits', 'Jumpsuits', 'Shrugs', 'Sweaters & Sweatshirts', 'Jackets & Coats', 'Blazers & Waistcoats']
    const Footwear = ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters']
    const SportsandActiveWear= ['Clothing','Footwear','Sports Accessories','Sports Equipment']
    const LingerieandSleepwear = ['Bra','Briefs','Shapewear','Sleepwear & Loungewear','Swimwear','Camisoles & Thermals']
    const BeautyandPersonalCare = ['Makeup','Skincare','Premium Beauty','Lipsticks','Fragrances']
    const Gadgets = ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers']
    const Jewellery = ['Fashion Jewellery','Fine Jewellery','Earrings']
    return (
        <div className="Components">
            <div className="column">
                <ListItems item={IndianandFusionWear} itemName="Indian & Fusion Wear" />
                <hr />
                <div className='CategoriesName'>Belts, Scarves & More</div>
                <div className='CategoriesName'>Watches & Wearables</div>
            </div>
            <div className="column">
                <ListItems item={WesternWear} itemName="Western Wear" />
                <hr />
                <div className='CategoriesName'>Plus Size</div>
            </div>
            <div className="column">
                <div className='CategoriesName'>Maternity</div>
                <div className='CategoriesName'>Sunglasses & Frames</div>
                <ListItems item={Footwear} itemName="Footwear" />
                <hr />
                <ListItems item={SportsandActiveWear} itemName="Sports & Active Wear" />
            </div>
            <div className="column">
                <ListItems item={LingerieandSleepwear} itemName="Lingerie & Sleepwear" />
                <hr />
                <ListItems item={BeautyandPersonalCare} itemName="Beauty & Personal Care" />
            </div>
            <div className="column">
                <ListItems item={Gadgets} itemName="Gadgets" />
                <hr />
                <ListItems item={Jewellery} itemName="Beauty & Personal Care" />
                <hr />
                <div className='CategoriesName'>Backpacks</div>
                <div className='CategoriesName'>Handbags, Bags & Wallets</div>
                <div className='CategoriesName'>Luggages & Trolleys</div>
            </div>
        </div>
    )
}

export default WomenComponentsLists
