
function NavProfileItems({items}) {
    console.log(items);
    return (
        <div className="navProfileItems">
            <img src={items.img} alt="" />
            <span>{items.itemName}</span>
        </div>
    )
}

export default NavProfileItems
