import { Link, useNavigate } from 'react-router-dom'
import { NavigationWrapper } from './Navigation.styles'
import { TfiMenuAlt } from "react-icons/tfi";
import { SidebarDrawer } from '../../components/Drawer/Drawer'

const Navigation = () => {
  const navigate =useNavigate( )

  return (
    <NavigationWrapper>

      <Link  to={"/"}>
      <div className="appLogo">
        <img src="/images/logo.png" alt="logoImg" />
        <h3 className='appName'>Resourcify</h3>
      </div>
      </Link>
        <div className="leftBox">
            <button className='homeButton' onClick={()=>navigate("/library")}>Home</button>
            <button className='backButton' onClick={()=>navigate(-1)}>Back</button>
        </div>
        <SidebarDrawer>

        <TfiMenuAlt className="menuIcon"/>
        </SidebarDrawer>
        {/* <div className="rightBox">
            <input type="text" placeholder='search anything...' />
        </div> */}
    </NavigationWrapper>
  )
}

export default Navigation