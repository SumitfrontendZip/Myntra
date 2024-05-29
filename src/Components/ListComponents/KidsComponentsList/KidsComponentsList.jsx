import ListItems from "../../ListItem/ListItems"

function KidsComponentsList() {
    const boysClothing = ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Trousers', 'Clothing Sets', 'Ethnic Wear', 'Track Pants & Pyjamas', 'Jacket, Sweater & Sweatshirts', 'Party Wear', 'Innerwear & Thermals', 'Nightwear & Loungewear', ' Value Packs']
    const GirlsClothing = ['Dresses', 'Tops', 'Tshirts', 'Clothing Sets', 'Lehenga choli', 'Kurta Ses', 'Party wear', 'Dungarees & Jumpsuits', 'Skirts & shorts', 'Tights & Leggings', 'Jeans, Trousers & Capris', 'Jacket, Sweater & Sweatshirts', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs']
    const Footwear = ['Casual Shoes', 'Flipflops', 'Sports Shoes', 'Flats', 'Sandals', 'Heels', 'School Shoes', 'Socks']
    const ToysandGames = ['Learning & Development', 'Activity Toys', 'Soft Toys', 'Action Figure / Play set']
    const Infants = ['Bodysuits', 'Rompers & Sleepsuits', 'Clothing Sets', 'Tshirts & Tops', 'Dresses', 'Bottom wear', 'Winter Wear', 'Innerwear & Sleepwear', 'Infant Care']
    const KidsAccessories = ['Bags & Backpacks', 'Watches', 'Jewellery & Hair accessory', 'Sunglasses', 'Masks & Protective Gears', 'Caps & Hats']
    const Brands = ['H&M', 'Max Kids', 'Pantaloons', 'United Colors Of Benetton Kids', 'YK', 'U.S. Polo Assn. Kids', 'Mothercare', 'HRX']
    return (
        <div className='Components'>
            <div className="column">
                <ListItems item={boysClothing} itemName="Boys Clothing" />
            </div>
            <div className="column">
                <ListItems item={GirlsClothing} itemName="Girls Clothing" />
            </div>
            <div className="column">
                <ListItems item={Footwear} itemName="Footwear" />
                <hr />
                <ListItems item={ToysandGames} itemName="Toys & Games" />
            </div>
            <div className="column">
                <ListItems item={Infants} itemName="Infants" />
                <hr />
                <div className='CategoriesName'>Home & Bath</div>
                <div className='CategoriesName'>Personal Care</div>
            </div>
            <div className="column">
                <ListItems item={KidsAccessories} itemName="Kids Accessories" />
                <hr />
                <ListItems item={Brands} itemName="Brands" />
            </div>
        </div>
    )
}

export default KidsComponentsList
