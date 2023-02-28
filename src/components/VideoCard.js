import React from 'react';
import UserIcn from "../images/userIcn.png";
import {useFormatNumber} from "../utilities/utils"

const VideoCard = ({videoData}) => {

  const viewCount = useFormatNumber(videoData?.statistics?.viewCount);

  return (
    <div className="w-[100%]">
      <img className=" rounded-2xl h-30" alt="Thumbnail" src={videoData?.snippet?.thumbnails?.maxres?.url}></img>
      <div className="flex h-8 py-3">
        <img className="h-8" alt="playerIcn" src={UserIcn} ></img>
        <ul className="h-14">
          <li className="text-black text-xs font-semibold px-3 line-clamp-2">{videoData?.snippet?.title}</li>
          <li className="text-gray-700 text-xs px-3 py-1 line-clamp-1" >{videoData?.snippet?.channelTitle}</li>
          <li className="text-gray-700 text-xs px-3">{viewCount} views</li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCard