import { ResourceType } from '../../types/types'
import { VideoFileWrapper } from './VideoFile.styles'

type VideoFilePropsType = {
  resource:ResourceType
}

const VideoFile:React.FC<VideoFilePropsType> = ({resource}) => {
  return (
    <VideoFileWrapper className="videoFile_wrapper">
        <strong className='title'>{resource.name}</strong>
        <video src={resource?.url} controls className='videoFile_video'></video>
    </VideoFileWrapper>
  )
}

export default VideoFile