import { useNavigate } from 'react-router-dom'
import { NavigationWrapper } from './Navigation.styles'

const Navigation = () => {
  const navigate =useNavigate( )

  return (
    <NavigationWrapper>
        <div className="leftBox">
            <button className='homeButton' onClick={()=>navigate("/library")}>Home</button>
            <button className='backButton' onClick={()=>navigate(-1)}>Back</button>
        </div>
        {/* <div className="rightBox">
            <input type="text" placeholder='search anything...' />
        </div> */}
    </NavigationWrapper>
  )
}

export default Navigation