import { useNavigate } from 'react-router-dom'
import { FileTypeWrapper, FileWrapper } from './File.styles'
import { useEffect, useState } from 'react'
import { fetchFileByIdApi } from '../../api/Api'
import { FileTypeProps } from '../../utils/types/types'
type FileProps = {
  data:string
}
const File:React.FC<FileProps> = ({data}) => {

    const [fileData,setFileData] = useState<FileTypeProps>({
      _id:"",
      name:"",
      desc:"",
      bundle:null,
      group:null,
      resources:[]
    })
    const [fileTypes,setFileTypes] = useState<string[]>([])


useEffect(()=>{
  if(data){
    getFilebyId()
  }
},[data]) 

useEffect(() => {
  if (fileData?.name) {
    let data: string[] = fileData?.resources?.reduce((acc, curr) => {
      if (curr?.type && !acc.includes(curr?.type)) {
        acc.push(curr?.type);
      }
      return acc;
    }, [] as string[]);
    console.log(data)

    setFileTypes(data);
  }
}, [fileData]);


  const getFilebyId=async()=>{
    if(!data)return;
    try {
    const {data:res,status} =  await  fetchFileByIdApi(data)
    if(status===200){
      setFileData(res.message)
    }
    } catch (error) {
      console.log(error)
    }
  }

const navigate =useNavigate()
    const handleGoToFile=()=>{
        navigate(`../file/${data}`)
    }
    const fileTypeMapping: Record<string, React.ReactElement>={
        video:<VideoType/>,
        audio:<AudioType/>,
        template:<TemplatesType/>,
        pdf:<BookType/>,
    }
  return (
    <FileWrapper onClick={handleGoToFile}>

        <p className='fileName'>{fileData?.name}</p>
        <div className="fileTypeBox">
              {
                fileTypes?.map((res)=>{return <>{fileTypeMapping[res]}</>})
              }
        </div>  

    </FileWrapper>
  )
}

export default File;


const BookType=()=>{
    return (<>
             <FileTypeWrapper className="fileTypeItem">
                {/* <PiBooksFill/> */}
                <p>📕 Book</p>
            </FileTypeWrapper>
    </>)
}
const AudioType=()=>{
    return (<>
             <FileTypeWrapper className="fileTypeItem">
                {/* <BsHeadphones/> */}
                <p>🎧 Audio</p>
            </FileTypeWrapper>
        
    
    </>)
}
const VideoType=()=>{
    return (<>
             <FileTypeWrapper className="fileTypeItem">
                <p>🎬 Video</p>
            </FileTypeWrapper>
        
    
    </>)
}
const TemplatesType=()=>{
    return (<>
             <FileTypeWrapper className="fileTypeItem">

                <p>📄 Templates</p>
            </FileTypeWrapper>
        
    
    </>)
}