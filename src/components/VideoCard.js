import React from 'react';
import UserIcn from "../images/userIcn.png";

const VideoCard = ({videoData}) => {
  return (
    <div className=" w-[23%] h-60 rounded-2xl border-black border-solid shadow-xl m-1">
      <img className="rounded-2xl" alt="Thumbnail" src={videoData? videoData?.snippet?.thumbnails?.standard?.url : ''}></img>
      <div className="flex h-8">
        <img className="h-8" alt="playerIcn" src={UserIcn} ></img>
        <h5 className=" text-xs font-bold">{videoData?.snippet?.title}</h5>
      </div>
      
    </div>
  )
}

export default VideoCard