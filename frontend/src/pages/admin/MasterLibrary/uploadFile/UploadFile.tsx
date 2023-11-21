import { UploadFileWrapper } from './UploadFile.styles'
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { createFileApi, fetchAllLibraryCategoryApi, getGroupByBundleApi } from '../../../../api/Api'
import { BundleType, GroupType } from '../../../../types/types'

const UploadFile = () => {
    const [uploadLibraryData,setUploadLibrayData] =useState({
        name:"",
        desc:"",
        bundle:"",
        group:""
    })
    const [categoryData,setCategoryData] =useState<BundleType[]>([])
    const [groupTypesData,setGroupTypesData] = useState<GroupType[]>([])

    useEffect(()=>{
    getAllCategoryDatas()
    },[])
    
    useEffect(()=>{
        getGroupData()
    },[uploadLibraryData.bundle])
    




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
               }
        } catch (error) {
            console.log(error)
        }
    }

    const getGroupData=async()=>{
        if(!uploadLibraryData.bundle)return;

        try {
              const {data,status} =   await getGroupByBundleApi(uploadLibraryData.bundle);
              if(status===200){
                setGroupTypesData(data.message)
              }
        } catch (error) {
            console.log(error)
        }
    }
  

     const handleSubmit=async(e:SyntheticEvent)=>{

        e.preventDefault()

        try {
              const {status}=   await createFileApi({
                    ...uploadLibraryData,
                })
                if(status===200){
                    setUploadLibrayData({
                      name:"",
                      desc:"",
                      bundle:"",
                      group:""
                    })
                    alert("successfully added new library category")
                }
        } catch (error) {
           console.log(error) 
        }


     }
  return (
    <UploadFileWrapper onSubmit={handleSubmit}>
             <input type="text" placeholder="name"  name="name" value={uploadLibraryData.name} onChange={handleInputChange} />
    <input type="text"  placeholder="description" name="desc" value={uploadLibraryData.desc}  onChange={handleInputChange}/>
    <select name="bundle" value={uploadLibraryData.bundle} onChange={handleSelectChange}>
        <option value=" " selected disabled> Select Category</option>
            {
            categoryData.map(cat=>{
                return   <option key={cat._id} value={cat._id}>{cat.name}</option>
            })
        }
    </select>
    <select name="group"onChange={handleSelectChange} >
        <option value={uploadLibraryData.group} selected disabled> Select Types </option>
        {
            groupTypesData.map(type=>{
                return <option key={type._id} value={type._id}>{type.name}</option>
            })
        }
    </select>
    <button type="submit" >Submit</button>
    </UploadFileWrapper>
  )
}

export default UploadFile