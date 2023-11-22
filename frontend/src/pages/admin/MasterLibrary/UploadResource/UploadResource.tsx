import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react"
import { UploadFileWrapper } from "../uploadFile/UploadFile.styles"
import { createResourceApi, fetchAllLibraryCategoryApi, getFilesByGroupApi, getGroupByBundleApi, uploadImageApi, uploadVideoApi } from "../../../../api/Api"
import { BundleType, GroupType, fileType } from "../../../../types/types"
import { IoMdCloseCircle } from "react-icons/io"
import { AxiosResponse } from "axios"


const UploadResource = () => {
    const [uploadLibraryData,setUploadLibrayData] =useState({
    name:"",
    bundle:"",
    group:"",
    file:"",
    type:"",
    display:true
})
    const [categoryData,setCategoryData] =useState<BundleType[]>([])
    const [filesData,setFilesData] = useState<fileType[]>([])
    const [selectedBundle,setSelectedBundle] = useState<string|null>(null)
    const [groupTypesData,setGroupTypesData] = useState<GroupType[]>([])
    const [file,setFile] = useState<File|null>(null)
    const fileInputRef = useRef<HTMLInputElement|null>(null)
    const supportedMedia={
        audio:".mp3, .wav, .ogg",
        video:".mp4",
        pdf:"application/pdf",
        image:".jpg, .jpeg, .png"
    }   
   type ApiRoutesMapping = {
  image: (url: string | ArrayBuffer) => Promise<AxiosResponse<any, any>>;
  video: (url: string | ArrayBuffer) => Promise<AxiosResponse<any, any>>;
  pdf: (url: string | ArrayBuffer) => Promise<AxiosResponse<any, any>>;
};

 const apiRoutesMapping: ApiRoutesMapping = {
  image: uploadImageApi,
  video: uploadVideoApi,
  pdf: uploadImageApi,
};

    useEffect(()=>{
    getAllCategoryDatas()
    },[])
    
    useEffect(()=>{
        getGroupData()
    },[selectedBundle])

    useEffect(()=>{
        setSelectedBundle(uploadLibraryData.bundle)
    },[uploadLibraryData.bundle])
    useEffect(()=>{
        getFilesByGroup()
    },[uploadLibraryData.group])

    console.log(file)
    const handleFileChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            let file = e.target.files[0]
            setFile(file)
            setUploadLibrayData(prev=>({...prev, name:file?.name.split(".")[0]}))
        }
    }

    const handleSelectChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        const {name,value} = e.target;
                 setUploadLibrayData(prev=>({...prev, [name]:value}))
    }
    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
            const {name,value} = e.target;
            setUploadLibrayData(prev=>({...prev, [name]:value}))
    }
    
    const getAllCategoryDatas=async()=>{
        try {
               const {data,status} = await fetchAllLibraryCategoryApi()
               if(status===200){
                setCategoryData(data.message)
                setSelectedBundle(data.message[0]._id)
               }
        } catch (error) {
            console.log(error)
        }
    }

    const getGroupData=async()=>{
        if(!selectedBundle)return;
        try {
              const {data,status} =   await getGroupByBundleApi(selectedBundle);
              if(status===200){
                setGroupTypesData(data.message)
              }
        } catch (error) {
            console.log(error)
        }
    }
  
    const getFilesByGroup=async()=>{
        if(!uploadLibraryData.group)return;
        try {
            
         const {data} =    await getFilesByGroupApi(uploadLibraryData.group)
         setFilesData(data.message)
        } catch (error) {
            console.log(error) 
        }
    }

    const prepareToUpload=(e:SyntheticEvent)=>{
        e.preventDefault()
          if(!file)return;
    
      const reader:FileReader = new FileReader ();
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        let url = reader.result;
        if(url){
          handleUploadImage(url);
        }
      }
      reader.onerror=()=>{
        console.log("some error while reading file");
      }

    }
 
     const handleUploadImage=async(url:string|ArrayBuffer)=>{

        try {
       const { data, status } = await (apiRoutesMapping as Record<string, (url: string | ArrayBuffer) => Promise<AxiosResponse<any, any>>>)[uploadLibraryData.type](url);


         if(status===200){
            handleSubmit(data.message)
         }
        } catch (error) {
            console.log(error)
        }

     }
     const handleSubmit=async(url:string)=>{

        try {
              const {status}=   await createResourceApi({
                    ...uploadLibraryData,
                    url,
                    size:file?.size
                })
                if(status===200){
                    setUploadLibrayData((prev)=>({...prev,   
                         name:"",
                        display:true}))
                    setFile(null)
                    alert("successfully added new library category")
                }
        } catch (error) {
           console.log(error) 
        }


     }

  
  return (
    <UploadFileWrapper onSubmit={prepareToUpload}>
           <input type="text" placeholder="Resource name"  name="name" value={uploadLibraryData.name} onChange={handleInputChange} />
    <select name="type"  onChange={handleSelectChange} >
        <option value="">select resource type</option>
        <option value="video">video</option>
        <option value="pdf">book(pdf)</option>
        <option value="pdf">template</option>
        <option value="audio">audio</option>
    </select>
    <div className="inputItem">
        <input type="checkbox" name="" id="" checked={uploadLibraryData.display} onChange={(e)=>setUploadLibrayData(prev=>({...prev,display:e.target.checked}))}/>
        <label htmlFor="">Display Book </label>
    </div>
    <select name="bundle" value={uploadLibraryData.bundle} onChange={handleSelectChange} >
        <option value="" selected disabled> Select Category</option>
            {
            categoryData.map(cat=>{
                return   <option key={cat._id} value={cat._id}>{cat.name}</option>
            })
        }
    </select>
    <select name="group"onChange={handleSelectChange} value={uploadLibraryData.group} >
        <option value={""} selected disabled> Select group </option>
        {
            groupTypesData.map(type=>{
                return <option key={type._id} value={type._id}>{type.name}</option>
            })
        }
    </select>
    <select name="file"onChange={handleSelectChange} value={uploadLibraryData.file} >
        <option value={""} selected disabled> Select File </option>
        {
            filesData.map(file=>{
                return <option key={file._id} value={file._id}>{file.name}</option>
            })
        }
    </select>
    <input
     type="file"
      ref={fileInputRef}
     onChange={handleFileChange} 
     accept={(supportedMedia as Record<string, string>)[uploadLibraryData.type]} 
     style={{display:"none"}}/>
     {
        file && <div className="imageWrapper">
            <IoMdCloseCircle onClick={()=>setFile(null)}/>
            <img src={URL.createObjectURL(file)}     alt="library photo" />
        </div>
    }
    <button type="button" className="secondary_button" onClick={()=>fileInputRef.current?.click()}> upload resource </button>
    <button type="submit" >Submit</button>
    </UploadFileWrapper>
  )
}

export default UploadResource