import React, { useEffect, useState } from 'react'
import { FilePageWrapper } from './FilePage.styles'
import Navigation from '../../shared/Navigation/Navigation'
import VideoFile from '../../components/videoFile/VideoFile'
import BookFile from '../../components/BookFile/BookFile'
import PdfFile from '../../components/pdfFile/PdfFile'
import { useParams } from 'react-router-dom'
import { fetchFileByIdApi } from '../../api/Api'
import { FileTypeProps, ResourceType } from '../../utils/types/types'

const FilePage = () => {
  const {id} = useParams();
const [ fileData,setFileData] =useState<FileTypeProps>({
   _id:"",
     name:"",
    desc:"",
    bundle: null,
    group: null,
    resources:[]
})


  useEffect(()=>{
    getFileById()
  },[id])

  const getFileById=async()=>{
    if(!id)return;


    try {
     const {data,status} = await fetchFileByIdApi(id)
      if(status===200){
        setFileData(data.message)
      }
    } catch (error) {

      console.log(error)
      
    }

  }


  return (
    <>
    <FilePageWrapper>
        <Navigation/>
        <div className="innerBox">

        <div className="header_box">
            <h1 className='headerTitle'>{fileData?.name}</h1>
            <p>{fileData?.desc}</p>
        </div>
        <div className='fileWrapper'>

      {
        fileData?.resources?.map((resource)=><DisplayResource key={resource?._id} resource={resource}/>
           )
      }

      {
        fileData?.resources?.map((resource)=>{
        return (resource?.type=== "pdf" && resource.display) ? <BookFile key={resource?._id} url={resource?.url}/> :null 
        })
      }

        </div>
        </div>
    </FilePageWrapper>
    </>
  )
}

export default FilePage

type DisplayResourcePropsType={
  resource:ResourceType
}

const DisplayResource:React.FC<DisplayResourcePropsType>=({resource})=>{

const ResourceMapping : Record<string, React.ReactElement>= {
  pdf:<PdfFile resource={resource}/>,
  video:<VideoFile resource={resource}/>
  
}

  return (
    <>
      {ResourceMapping[resource?.type]}
    </>
  )

}
