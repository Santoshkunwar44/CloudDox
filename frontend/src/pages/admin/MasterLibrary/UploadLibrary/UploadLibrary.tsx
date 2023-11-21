import  { ChangeEvent, SyntheticEvent, useRef, useState } from "react"
import { UploadLibraryWrapper } from "./UploadLibrary.styles"
import {IoMdCloseCircle} from "react-icons/io"
import { createMasterCategoryApi, uploadImageApi } from "../../../../api/Api"

const UploadLibrary = () => {

    const [uploadLibraryData,setUploadLibrayData] =useState({
        name:"",
        desc:"",
  
    })
    const [file,setfile]  = useState<File|null>(null)
    const inputFileRef  =useRef<HTMLInputElement|null>(null)
    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
            const {name,value} = e.target;
            setUploadLibrayData(prev=>({...prev, [name]:value}))
    }
    const handleFileChange=(e:ChangeEvent<HTMLInputElement>)=>{

        if(e.target.files){
            let img = e.target.files[0];
            setfile(img)
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
         const {data,status} =    await uploadImageApi(url)
         if(status===200){
            handleSubmit(data.message)
         }
        } catch (error) {
            
        }

     }
     const handleSubmit=async(imageUrl:string)=>{

        try {
              const {status}=   await createMasterCategoryApi({
                    ...uploadLibraryData,
                    image:imageUrl,
                })
                if(status===200){
                    setUploadLibrayData({
                      name:"",
                      desc:""
                    })
                    setfile(null)
                    alert("successfully added new library category")
                }
        } catch (error) {
           console.log(error) 
        }


     }
  return (
    <UploadLibraryWrapper  onSubmit={prepareToUpload}>
    <input type="text" placeholder="name"  name="name" value={uploadLibraryData.name} onChange={handleInputChange} />
    <input type="text"  placeholder="description" name="desc" value={uploadLibraryData.desc}  onChange={handleInputChange}/>
    <input   type="file"  style={{display:"none"}} onChange={handleFileChange} ref={inputFileRef}/>
    {
        file && <div className="imageWrapper">
            <IoMdCloseCircle onClick={()=>setfile(null)}/>
            <img src={URL.createObjectURL(file)}     alt="library photo" />
        </div>
    }
    <button type="button" onClick={()=>inputFileRef.current?.click()}>upload Image</button>
    <button type="submit" >Submit</button>
    </UploadLibraryWrapper>
  )
}

export default UploadLibrary