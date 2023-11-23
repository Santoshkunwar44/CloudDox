import  { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react"
import { createGroupApi, fetchAllLibraryCategoryApi, uploadImageApi } from "../../../../api/Api"
import { BundleType } from "../../../../utils/types/types"
import { UploadLibraryTypesWrapper } from "./UploadLibraryTypes.styles"
import { IoMdCloseCircle } from "react-icons/io"

const UploadLibraryTypes = () => {

    const [libraryTypesData,setLibraryTypesData] =useState({
        name:"",
        desc:"",
        bundle:""
    })
    const [categoryData,setCategoryData] =useState<BundleType[]>([])
    const [file,setfile]  = useState<File|null>(null)
    const inputFileRef =useRef<HTMLInputElement|null>(null)

    useEffect(()=>{
        getAllCategoryDatas()
    },[])

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
            const {name,value} = e.target;
            setLibraryTypesData(prev=>({...prev, [name]:value}))
    }
    const handleFileChange=(e:ChangeEvent<HTMLInputElement>)=>{

        if(e.target.files){
            let img = e.target.files[0];
            setfile(img)
        }

    }
    const getAllCategoryDatas=async()=>{
        try {
               const {data,status} = await fetchAllLibraryCategoryApi()
               if(status===200){
                setCategoryData(data.message)
               }
        } catch (error) {
            console.log(error)
        }
    }

  
     const handleSelectChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        const {name,value} = e.target;
        setLibraryTypesData(prev=>({...prev, [name]:value}))
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
            console.log(error)
        }

     }
     const handleSubmit=async(imageUrl:string)=>{

        try {
              const {status}=   await createGroupApi({
                    ...libraryTypesData,
                    image:imageUrl,
                })
                if(status===200){
                    setLibraryTypesData({
                        name:"",
                        desc:"",
                        bundle:"",
                    })
                    setfile(null)
                    alert("successfully added new library category")
                }
        } catch (error) {
           console.log(error) 
        }


     }
  return (
    <UploadLibraryTypesWrapper  onSubmit={prepareToUpload}>
    <input type="text" name="name" value={libraryTypesData.name} placeholder="name " onChange={handleInputChange} />
    <input type="text" name="desc" value={libraryTypesData.desc} placeholder="description " onChange={handleInputChange}/>
    <input   type="file"  style={{display:"none"}} onChange={handleFileChange} ref={inputFileRef}/>
    <select name="bundle" value={libraryTypesData.bundle} onChange={handleSelectChange} >
        <option value=""  disabled selected>select category</option>
        {
            categoryData.map(cat=>{
                return   <option value={cat._id}>{cat.name}</option>
            })
        }
    </select>
    {
        file && <div className="imageWrapper">
            <IoMdCloseCircle onClick={()=>setfile(null)}/>
            <img src={URL.createObjectURL(file)}     alt="library photo" />
        </div>
    }
    <button type="button" onClick={()=>inputFileRef.current?.click()}>upload Image</button>
     <button type="submit" >Submit</button>
    </UploadLibraryTypesWrapper>
  )
}

export default UploadLibraryTypes