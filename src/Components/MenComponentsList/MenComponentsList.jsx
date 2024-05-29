import ListItems from '../ListItem/ListItems'
import './MenComponentsList.css'
function MenComponentsList() {
    const Topwear = ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'SweetShirts', 'Sweaters', 'Jackets', 'Blazers & Coats', 'Suits', 'Rain Jackets']
    const IndianAndFestiveWear = ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis']
    const Bottomwear = ['Jeans', 'Casual Trousers', 'Formal Trousers', 'Shorts', 'Track Pants & Joggers']
    const Innerwear = ['Briefs & Trunks', 'Boxer', 'Vests', 'Thermals', 'Sleepwear & Loungewear']
    const Footwear = ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers', 'Sandals & floaters', 'Filp Flops', 'Socks']
    const SportsAndActiveWear = ['Sports Shoes', 'Sports Sandals', 'Active T-Shirts', 'Track Pants & Shorts', 'Tracksuits', 'Jackets & Sweatshirts', 'Sports Accessories', 'Swimwear']
    const Gadgets = ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers']
    const Fashion = ['Wallets', 'Belts', 'Perfumes & Body Mists', 'Trimmers', 'Deodorants', 'Ties, Cufflinks & Pocket  Squares', 'Accessory Gifts Sets', 'Caps & Hats', 'Mufflers, Scarves & Gloves', 'Phones Cases', 'Rings & Wristwear', 'Helmets']
    return (
        <div className='Components'>
            <div className="column">
                <ListItems item={Topwear} itemName="Topwear" />
                <hr />
                <ListItems item={IndianAndFestiveWear} itemName="Indian And Festive Wear" />
            </div>
            <div className="column">
                <ListItems item={Bottomwear} itemName="Bottomwear" />
                <hr />
                <ListItems item={Innerwear} itemName="ItemWear" />
                <hr />
                <div className="CategoriesName">Plus Size</div>
            </div>
            <div className="column">
                <ListItems item={Footwear} itemName="Footwear" />
                <hr />
                <div className='CategoriesName'>Personal Care & Grooming</div>
                <div className='CategoriesName'>Sunglasses & Frames</div>
                <div className='CategoriesName'>Watches</div>
            </div>
            <div className="column">
                <ListItems item={SportsAndActiveWear} itemName="Sports And Active Wear" />
                <hr />
                <ListItems item={Gadgets} itemName="Gadgets" />
            </div>
            <div className="column">
                <ListItems item={Fashion} itemName="Fashion" />
                <div className='CategoriesName'>Bags & Backpacks</div>
                <div className='CategoriesName'>Luggages & Trolleys</div>
            </div>
        </div>
    )
}

export default MenComponentsList

