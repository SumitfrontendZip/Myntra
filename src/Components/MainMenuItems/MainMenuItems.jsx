import { useState } from "react"
import MenComponentsList from "../MenComponentsList/MenComponentsList"
import WomenComponentsLists from "../WomenComponentsList/WomenComponentsLists"
import KidsComponentsList from "../KidsComponentsList/KidsComponentsList"

function MainMenuItems({ items }) {

    const [showMenComponentsList, setShowMenComponentsList] = useState(false)

    const onMouseEnter = () => setShowMenComponentsList(true)
    const onMouseLeave = () => setShowMenComponentsList(false)

    const categoriesShowComponents = () => {
        switch (items) {
            case 'MEN': return <MenComponentsList />
            case 'WOMEN': return <WomenComponentsLists />
            case 'KIDS': return <KidsComponentsList />
            case 'HOME & LIVING': return <MenComponentsList />
            case 'BEAUTY': return <MenComponentsList />
            case 'STUDIO': return <MenComponentsList />

        }
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="navItems" >{items}</div>
            {
                showMenComponentsList && categoriesShowComponents()
            }
        </div>
    )
}

export default MainMenuItems
