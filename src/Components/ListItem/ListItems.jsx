
function ListItems({ item, itemName }) {

    return (
        <div className="ListColumn">
            <div className='CategoriesName'>{itemName}</div>
            <div className="listName">
                {
                    item.map((item, index) => <li key={index}>{item}</li>)
                }
            </div>
        </div>

    )
}

export default ListItems
