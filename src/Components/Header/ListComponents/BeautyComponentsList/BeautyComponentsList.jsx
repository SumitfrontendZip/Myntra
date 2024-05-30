import ListItems from "../../ListItem/ListItems"

function BeautyComponentsList() {

    const Makeup = ['Lipstick', 'Lip Gloss', 'Lip Liner', 'Mascara', 'Eyeliner', 'Kajal', 'Eyeshadow', 'Foundation', 'Primer', 'Concealer', 'Compact', 'Nail Polish']
    const SkincareBathandBody = ['Face Moisturiser', 'Cleanser', 'Masks & Peel', 'Sunscreen', 'Serum', 'Face Wash', 'Eye Cream', 'Lip Balm', 'Body Lotion', 'Body Wash', 'Body Scrub', 'Hand Cream']
    const Haircare = ['Shampoo', 'Conditioner', 'Hair Cream', 'Hair Oil', 'Hair Gel', 'Hair Color', 'Hair Serum', 'Hair Accessory']
    const Fragrances = ['Perfume', 'Deodorant', 'Body Mist']
    const Appliances = ['Hair Straightener', 'Hair Dryer', 'Epilator']
    const MenGrooming = ['Trimmers', 'Beard Oil', 'Hair Wax']
    const BeautyGiftandMakeupSet = ['Beauty Gift', 'Makeup Kit']
    const TopBrands = ['Lakme', 'Maybelline', 'LOreal', 'Philips', 'Bath & Body Works', 'THE BODY SHOP', 'Biotique', 'Mamaearth', 'MCaffeine', 'Nivea', 'Lotus Herbals', 'LOreal Professionnel', 'KAMA AYURVEDA', 'M.A.C', 'Forest Essentials']

    return (
        <div className='Components'>
            <div className="column">
                <ListItems item={Makeup} itemName="Makeup" />
            </div>

            <div className="column">
                <ListItems item={SkincareBathandBody} itemName="Skincare Bath & Body" />
                <div className="CategoriesName">Baby Care</div>
                <div className="CategoriesName">Masks</div>
            </div>

            <div className="column">
                <ListItems item={Haircare} itemName="Haircare" />
                <ListItems item={Fragrances} itemName="Fragrances" />
            </div>

            <div className="column">
                <ListItems item={Appliances} itemName="Appliances" />
                <ListItems item={MenGrooming} itemName="Men Grooming" />
                <ListItems item={BeautyGiftandMakeupSet} itemName="Beauty Gift & MakeupSet" />
                <div className="CategoriesName">Premium Beauty</div>
                <div className="CategoriesName">Wellness & Hygiene</div>
            </div>

            <div className="column">
                <ListItems item={TopBrands} itemName="Top Brands" />
            </div>

        </div>
    )
}

export default BeautyComponentsList
