import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { YOUTUBE_ALL_VIDEOS, YOUTUBE_API_KEY } from "../utilities/Constants"
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(()=>{
    GetVideos();
  },[]);

  async function GetVideos(){
  const data = await fetch(YOUTUBE_ALL_VIDEOS+YOUTUBE_API_KEY);
  const json = await data.json();
  setVideoList(json.items);
};
  return (
    <div className="flex flex-wrap">
      {
        videoList.map((item) => {
          if(!item?.snippet?.thumbnails?.maxres) 
          {
            return null;
          }
          else{
          return (
            <Link className=" cursor-pointer w-[23%] h-60 rounded-2xl border-black border-solid shadow-xl m-1" to = {"/watch?v="+item?.id} key = {item?.id}>
              <VideoCard videoData = {item?item:''} />
            </Link>
          )}
      })
    }
    </div>
  );
}

export default VideoContainer