import React from 'react'
import { GroupType } from '../../utils/types/types'
import File from '../File/File'
import { GroupItemWrapper } from './GroupItem.styles'

type GroupItemProps={
  data:GroupType
}

const GroupItem:React.FC<GroupItemProps> = ({data}) => {


  return (
    <GroupItemWrapper>
        <h1 className='groupTitle'>{data?.name}</h1>
        <img className='groupImage' src={data?.image} alt="" />
            <p className='groupDesc'>{data?.desc}
            </p>
            <div className="fileWrapper">

      {
        data?.files?.map((dat,index)=><File data={dat} key={index}/>)
      }
      </div>
    </GroupItemWrapper>
  )
}

export default GroupItem