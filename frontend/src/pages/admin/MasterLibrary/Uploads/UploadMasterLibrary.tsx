import UploadLibrary from "../UploadLibrary/UploadLibrary"
import UploadLibraryTypes from "../UploadLibraryTypes/UploadLibraryTypes"
import UploadResource from "../UploadResource/UploadResource"
import UploadFile from "../uploadFile/UploadFile"
import { UploadMasterLibraryWrapper } from "./UploadMasterLibrary.styles"

const Upload = () => {
  return (
    <UploadMasterLibraryWrapper>
        <div className="uploadSection">

        <h1>Master Librariess</h1>
        <h4>Upload Master Libraries </h4>
        <UploadLibrary/>

        </div>
        <div className="uploadSection">
            <h1>Library category types</h1>
              <UploadLibraryTypes/>

        </div>
        <div className="uploadSection">
            <h1>Upload File</h1>
              <UploadFile/>

        </div>
        <div className="uploadSection">
            <h1>Upload Resources</h1>
              <UploadResource/>

        </div>

    </UploadMasterLibraryWrapper>
  )
}

export default Upload