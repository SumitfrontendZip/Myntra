import Icon from './SearchIcon.svg'
import './SearchBar.css'
function InputBox() {
    return (
        <div className="inputBar">
            <span><img src={Icon} alt="search Icon" /></span>
            <input type="text" placeholder="Search for products, brands and more" />
        </div>
    )
}

export default InputBox
