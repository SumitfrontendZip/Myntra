import studioLogo from './myntra-studio.jpg'
import navBanner from './sudio-nav-banner.png'
import arrow from './arrow.png'
import './StudioComponents.css'
function StudioComponents() {
    return (
        <div className="studioComponent" >
            <img src={studioLogo}alt="" />
            <span>Your daily inspiration for everything fashion</span>
            <img src={navBanner} alt="" />
            <button><span>EXPLORE STUDIO</span><img src={arrow} alt="" /></button>
        </div>
    )
}

export default StudioComponents