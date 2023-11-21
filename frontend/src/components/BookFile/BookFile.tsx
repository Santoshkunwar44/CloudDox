import { BookFileWrapper } from "./BookFile.styles"
import { Viewer,Worker } from "@react-pdf-viewer/core"
import {  defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React from "react";

type BookFileProps = {
  url:string
}
const BookFile:React.FC<BookFileProps> = ({url}) => {
    const layoutPlugin = defaultLayoutPlugin()


  return (
    <BookFileWrapper>
        <div className="innerWrapper">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer    fileUrl={url} plugins={[layoutPlugin]} />
        </Worker>
        </div>
    </BookFileWrapper>
  )
}

export default BookFile