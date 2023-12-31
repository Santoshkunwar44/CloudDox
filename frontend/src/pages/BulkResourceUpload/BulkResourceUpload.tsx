// import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
// import {  createResourceApi, fetchAllLibraryCategoryApi, getFilesByGroupApi, getGroupByBundleApi, resourcePayloadType } from "../../api/Api"
// import { BulkResourceUploadWrapper } from "./BulkResourceUpload.styles"
// import { BundleType, GroupType, fileType } from "../../utils/types/types"
// import { resourceData } from "../../data/data"

// const BulkResourceUpload = () => {
//     const [uploadLibraryData,setUploadLibrayData] =useState({
//     bundle:"",
//     group:"",
//     file:"",
//     })
//     const [categoryData,setCategoryData] =useState<BundleType[]>([])
//     const [filesData,setFilesData] = useState<fileType[]>([])
//     const [groupTypesData,setGroupTypesData] = useState<GroupType[]>([])





//     useEffect(()=>{
//     getAllCategoryDatas()
//     },[])
    
//     useEffect(()=>{
//         getGroupData()
//     },[uploadLibraryData.bundle])

//     useEffect(()=>{
//         getFilesByGroup()
//     },[uploadLibraryData.group])


//     const handleSelectChange=(e:ChangeEvent<HTMLSelectElement>)=>{
//         const {name,value} = e.target;
//         setUploadLibrayData(prev=>({...prev, [name]:value}))
//     }

//     const getAllCategoryDatas=async()=>{
//         try {
//                const {data,status} = await fetchAllLibraryCategoryApi()
//                if(status===200){
//                 setCategoryData(data.message)
//                }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const getGroupData=async()=>{
//         if(!uploadLibraryData.bundle)return;
//         try {
//               const {data,status} =   await getGroupByBundleApi(uploadLibraryData.bundle);
//               if(status===200){
//                 setGroupTypesData(data.message)
//               }
//         } catch (error) {
//             console.log(error)
//         }
//     }
  
//     const getFilesByGroup=async()=>{
//         if(!uploadLibraryData.group)return;
//         try {
            
//          const {data} =    await getFilesByGroupApi(uploadLibraryData.group)
//          setFilesData(data.message)
//         } catch (error) {
//             console.log(error) 
//         }
//     }


//     const uploadResourceFiles=async(e:SyntheticEvent)=>{

//         e.preventDefault()

//     if(!uploadLibraryData.bundle || !uploadLibraryData.group || !uploadLibraryData.file)return;


//         resourceData.forEach(async data=>{
//             const fileStr = await fetch(data.path)  
//         })


//     }





//     const uploadResource=async(resourcePayload:resourcePayloadType)=>{
//         try {
//           const {data,status} =   await createResourceApi(resourcePayload);
//         if(status===200){
//             console.log("successfully",data.message)
//         }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//   return (
//     <>
//     <BulkResourceUploadWrapper>
//         <form onSubmit={uploadResourceFiles}>
//        <select name="bundle" value={uploadLibraryData.bundle} onChange={handleSelectChange}>
//         <option value="" selected disabled> Select Category</option>
//             {
//                 categoryData.map(cat=>{
//                     return   <option key={cat._id} value={cat._id}>{cat.name}</option>
//                 })
//             }
//     </select>
//     <select name="group"onChange={handleSelectChange} value={uploadLibraryData.group}>
//         <option value="" selected disabled> Select Types </option>
//         {
//             groupTypesData.map(type=>{
//                 return <option key={type._id} value={type._id}>{type.name}</option>
//             })
//         }
//     </select>
//     <select name="file"onChange={handleSelectChange} value={uploadLibraryData.file}>
//         <option value="" selected disabled> Select File </option>
//         {
//             filesData.map(file=>{
//                 return <option key={file._id} value={file._id}>{file.name}</option>
//             })
//         }
//     </select>
//         <button  className="uploadFile" type="submit">Submit</button>
//     </form>
//     </BulkResourceUploadWrapper>
//     </>
//   )
// }

// export default BulkResourceUpload