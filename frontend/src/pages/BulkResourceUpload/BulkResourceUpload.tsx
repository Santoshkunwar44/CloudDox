// import { ChangeEvent, useEffect, useState } from "react"
// import { createFileApi, fetchAllLibraryCategoryApi, getFilesByGroupApi, getGroupByBundleApi } from "../../api/Api"
// import { BulkResourceUploadWrapper } from "./BulkResourceUpload.styles"
// import { BundleType, GroupType, fileType } from "../../types/types"
// import { uploadFileData } from "../../data/data"

// const BulkResourceUpload = () => {
//     const [uploadLibraryData,setUploadLibrayData] =useState({
//     name:"",
//     bundle:"",
//     group:"",
//     file:"",
//     type:"",
//     size:"",
//     url:"",
//     display:true
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


//     const uploadFile=async()=>{
//     console.log("submitting",uploadLibraryData)

//     if(!uploadLibraryData.bundle || !uploadLibraryData.group)return;
        
//     const createFilePromise =  uploadFileData.map((data)=>{

//         const payload = {
//             ...data, 
//             bundle:uploadLibraryData.bundle,
//             group:uploadLibraryData.group,
//         }
//         return createFileApi(payload)
//     })
//     Promise.all(createFilePromise).then((values)=>{
//         console.log("done",values)
//     })
//     }


//     const uploadResource=async()=>{

        

//     }

//   return (
//     <BulkResourceUploadWrapper>


    
//        <select name="bundle" value={uploadLibraryData.bundle} onChange={handleSelectChange}>
//         <option value="" selected disabled> Select Category</option>
//             {
//             categoryData.map(cat=>{
//                 return   <option key={cat._id} value={cat._id}>{cat.name}</option>
//             })
//         }
//     </select>
//     <select name="group"onChange={handleSelectChange} >
//         <option value={uploadLibraryData.group} selected disabled> Select Types </option>
//         {
//             groupTypesData.map(type=>{
//                 return <option key={type._id} value={type._id}>{type.name}</option>
//             })
//         }
//     </select>



//     <select name="file"onChange={handleSelectChange} >
//         <option value={uploadLibraryData.file} selected disabled> Select File </option>
//         {
//             filesData.map(file=>{
//                 return <option key={file._id} value={file._id}>{file.name}</option>
//             })
//         }
//     </select>


//         <button  className="uploadFile" onClick={uploadFile}>Submit</button>
//     </BulkResourceUploadWrapper>
//   )
// }

// export default BulkResourceUpload