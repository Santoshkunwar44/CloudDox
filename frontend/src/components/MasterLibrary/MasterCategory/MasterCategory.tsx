import { useEffect, useState } from 'react'
import CategoryCard from '../../CategoryCard/CategoryCard'
import { MasterCategoryWrapper } from './MasterCategory.styles'
import { fetchAllLibraryCategoryApi } from '../../../api/Api'
import { BundleType } from '../../../utils/types/types'

const MasterCategory = () => {


  const [category,setCategory] = useState<BundleType[]>([])
  

  useEffect(()=>{
    getAllCategory()
  },[])

  const getAllCategory=async()=>{
    try {

    const {status,data} = await  fetchAllLibraryCategoryApi()
    if(status===200){
      setCategory(data.message)
    }

      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MasterCategoryWrapper>
          <div className="headerBox">
            <h1 className='headerTitle' >Master Library</h1>
          </div>
          <div className="categoryContainer">
            {
              category.map((data,index)=><CategoryCard key={index} data={data}/>)
            }
          </div>
    </MasterCategoryWrapper>
  )
}

export default MasterCategory

