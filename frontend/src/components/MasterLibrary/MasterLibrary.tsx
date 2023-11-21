import Navigation from "../../shared/Navigation/Navigation"
import MasterCategory from "./MasterCategory/MasterCategory"
import { MasterLibraryWrapper } from "./MasterLibrary.styles"

const MasterLibrary = () => {
  return (
    <MasterLibraryWrapper>

            <Navigation/>
            <MasterCategory/>

    </MasterLibraryWrapper>
  )
}

export default MasterLibrary