import { useState } from "react"
import MenComponentsList from "../MenComponentsList/MenComponentsList"

function MainMenuItems({ items }) {

    const [showMenComponentsList, setShowMenComponentsList] = useState(false)

    const onMouseEnter = () => items === 'MEN' && setShowMenComponentsList(true)
    const onMouseLeave = () => items === 'MEN' && setShowMenComponentsList(false)
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="navItems" >{items}</div>
            {
                showMenComponentsList && <MenComponentsList />
            }
        </div>
    )
}

export default MainMenuItems
