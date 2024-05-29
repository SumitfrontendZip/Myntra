import { useState } from "react"
import KidsComponentsList from "../ListComponents/KidsComponentsList/KidsComponentsList"
import WomenComponentsLists from "../ListComponents/WomenComponentsList/WomenComponentsLists"
import MenComponentsList from "../ListComponents/MenComponentsList/MenComponentsList"
import HomeandLiving from "../ListComponents/HomeandLiving/HomeandLiving"
import BeautyComponentsList from "../ListComponents/BeautyComponentsList/BeautyComponentsList"
import StudioComponents from "../ListComponents/StudioComponents/StudioComponents"
function MainMenuItems({ items }) {

    const [showMenComponentsList, setShowMenComponentsList] = useState(false)

    const onMouseEnter = () => setShowMenComponentsList(true)
    const onMouseLeave = () => setShowMenComponentsList(false)

    const categoriesShowComponents = () => {
        switch (items) {
            case 'MEN': return <MenComponentsList />
            case 'WOMEN': return <WomenComponentsLists />
            case 'KIDS': return <KidsComponentsList />
            case 'HOME & LIVING': return <HomeandLiving />
            case 'BEAUTY': return <BeautyComponentsList />
            case 'STUDIO': return <StudioComponents />

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
