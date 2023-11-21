import React from 'react'
import { ResourceType } from '../../types/types'
import { PdfFileWrapper } from './PdfFile.styles'
import {ImLink} from 'react-icons/im'
type PdfFilePropsType={
  resource:ResourceType,
}
const PdfFile:React.FC<PdfFilePropsType>= ({resource}) => {
  return (
    <PdfFileWrapper target='_blank' href={resource?.url}>

        <ImLink/>
        <p className='pdfName'>{resource?.name}</p>


    </PdfFileWrapper>
  )
}

export default PdfFile