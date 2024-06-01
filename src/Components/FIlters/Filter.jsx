import './Filter.css'

function Filter() {
    return (
        <div className="filter">
            <span>Filters</span>
            <div className="Range">
                <label htmlFor="Price">Price</label>
                <input type="range" name="" id="" />
            </div>
            <div className="newItem">
                <input type="checkbox" name="" id="" />
                <label htmlFor="newItem">New Item</label>
            </div>
            <div className="Range">
                <label htmlFor="Price">Rating</label>
                <input type="range" name="" id="" />
            </div>
        </div>
    )
}
export default Filter;