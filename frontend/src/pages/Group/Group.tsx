
import { useParams } from "react-router-dom"
import GroupItem from "../../components/GroupItem/GroupItem"
import Navigation from "../../shared/Navigation/Navigation"
import { GroupWrapper } from "./Group.styles"
import { useEffect, useState } from "react"
import { fetchBundlebyIdApi } from "../../api/Api"
import { BundleType } from "../../types/types"

const Group = () => {
  const {id} = useParams()
const [bundleData,setBundleData] =useState<BundleType>({
    _id:"",
    name:"",
    image:"",
    desc:"",
    groups:[]
})



  useEffect(()=>{

    if(id){
      getBundleById()
    }


  },[id])


  const getBundleById=async ()=>{
    if(!id)return;
    try {
      const {data,status} = await fetchBundlebyIdApi(id);
      if(status===200){
        setBundleData(data.message)
      }

      
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <GroupWrapper>
          <Navigation/>
          <div className="header">
            <h1 className="headerTitle">{bundleData?.name}</h1>
            <p className="groupDesc">{bundleData?.desc}</p>
          </div>
          <div className="groupItemContainer">
          {
            bundleData?.groups?.map((data,index)=><GroupItem key={index} data={data}/>)
          }
          </div>
    </GroupWrapper>
  )
}

export default Group