import './Filter.css'

function Filter() {

    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Purple', 'Gray', 'Brown'];
    const brands = ['BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE', 'BrandF', 'BrandG', 'BrandH', 'BrandI', 'BrandJ'];
    const price = [
        { min: 0, max: 500 },
        { min: 501, max: 999 },
        { min: 1000, max: 5000 },
        { min: 5001, max: '5001+' }
    ]


    const items = (itemsData) => {

        if (itemsData === price) {
            return itemsData.map((item, index) => (
                <div className="items" key={index}>
                    <input type="checkbox" />
                    <label>{item.min} to {item.max}</label>
                </div>
            ));
        }

        return itemsData.map((item, index) => (
            <div className='items' key={index}>
                <input type="checkbox" name={item} id={item} />
                <label htmlFor={item}>{item}</label>
            </div>
        ));
    };


    return (
        <div className="filter">
            <span>Filters</span>
            <div className="filterContainer">
                <div className="CatrgoiesName">Color</div>
                <div className="filterItems">
                    {
                        items(colors)
                    }
                </div>
                <div className="CatrgoiesName">Brand</div>
                <div className="filterItems">
                    {
                        items(brands)
                    }
                </div>
                <div className="CatrgoiesName">Price</div>
                <div className="filterItems">
                    {
                        items(price)
                    }
                </div>
            </div>
        </div>
    )
}
export default Filter;