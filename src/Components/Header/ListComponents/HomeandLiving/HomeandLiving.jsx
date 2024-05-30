import ListItems from "../../ListItem/ListItems"

function HomeandLiving() {
    const BedLinenandFurnishing = ['Bed Runners', 'Mattress Protectors', 'Bedsheets', 'Bedding Sets', 'Blankets, Quilts & Dohars', 'Pillows & Pillow Covers', 'Bed Covers', 'Diwan Sets', 'Chair Pads & Covers', ' Sofa Covers']
    const Flooring = ['Floor Runners', 'Carpets', 'Floor Mats & Dhurries', ' Door Mats']
    const Bath = ['Bath Towels', 'Hand & Face Towels', 'Beach Towels', 'Towels Set', 'Bath Rugs', 'Bath Robes', 'Bathroom Accessories', 'Shower Curtains']
    const LampsandLighting = ['Floor Lamps', 'Ceiling Lamps', 'Table Lamps', 'Wall Lamps', 'Outdoor Lamps', 'String Lights']
    const HomeDecor = ['Plants & Planters', 'Aromas & Candles', 'Clocks', 'Mirrors', 'Wall Décor', 'Festive Decor', 'Pooja Essentials', 'Wall Shelves', 'Fountains', 'Showpieces & Vases', 'Ottoman']
    const KitchenandTable = ['Table Runners', 'Dinnerware & Serveware', 'Cups and Mugs', 'Bakeware & Cookware', 'Kitchen Storage & Tools', 'Bar & Drinkware', 'Table Covers & Furnishings']
    const Storage = ['Bins', 'Hangers', 'Organisers', 'Hooks & Holders', 'Laundry Bags']
    const Brands = ['H&M', 'Marks & Spencer', 'Home Centre', 'Spaces', "D'Decor", ' Story@Home', 'Pure Home & Living', 'Swayam', 'Raymond Home', 'Maspar', 'My Trident', ' Cortina', 'Random', 'Ellementry', 'ROMEE', 'SEJ by Nisha Gupta']

    return (
        <div className='Components'>
            <div className="column">
                <ListItems item={BedLinenandFurnishing} itemName="BedLinen & Furnishing" />
                <hr />
                <ListItems item={Flooring} itemName="Flooring" />
            </div>
            <div className="column">
                <ListItems item={Bath} itemName="Bath" />
                <hr />
                <ListItems item={LampsandLighting} itemName="Lamps & Lighting" />
            </div>
            <div className="column">
                <ListItems item={HomeDecor} itemName="Home Decor" />
                <hr />
                <div className='CategoriesName'>Cushions & Cushion Covers</div>
                <div className='CategoriesName'>Cutains</div>
            </div>
            <div className="column">
                <div className='CategoriesName'>Home Gift Sets</div>
                <ListItems item={KitchenandTable} itemName="Kitchen & Table" />
                <hr />
                <ListItems item={Storage} itemName="Storage" />
            </div>
            <div className="column">
                <ListItems item={Brands} itemName="Brands" />
            </div>
        </div>
    )
}

export default HomeandLiving
