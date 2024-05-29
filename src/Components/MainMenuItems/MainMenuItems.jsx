import { useState } from "react"
import MenComponentsList from "../MenComponentsList/MenComponentsList"

function MainMenuItems({ items }) {

    const [showMenComponentsList, setShowMenComponentsList] = useState(false)

    const onMouseEnter = () => items === 'MEN' && setShowMenComponentsList(true)
    const onMouseLeave = () => items === 'MEN' && setShowMenComponentsList(false)
    return (
        <>
            <div className="navItems" onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>{items}</div>
            {
                showMenComponentsList && (<MenComponentsList />)
            }
        </>
    )
}

export default MainMenuItems
