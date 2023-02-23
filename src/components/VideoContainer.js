import React, { useEffect, useState } from 'react'
import { YOUTUBE_ALL_VIDEOS, YOUTUBE_API_KEY } from "../utilities/Constants"
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(()=>{
    GetVideos();
  },[])

  async function GetVideos(){
  const data = await fetch(YOUTUBE_ALL_VIDEOS+YOUTUBE_API_KEY);
  const json = await data.json();
  setVideoList(json.items);
}

  return (
    <div className="flex flex-wrap m-4 p-5 w-[100%]">
      {
        videoList.map(item=> <VideoCard key = {item?.id} videoData = {item?item:''} />)
      }
    </div>
  )
}

export default VideoContainer