import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { YOUTUBE_CHANNEL_BY_ID, YOUTUBE_VIDEO_BY_ID } from "../utilities/Constants"
import { YOUTUBE_API_KEY } from "../utilities/Constants"
import {GetData} from "../utilities/GetData"



const WatchVideo = () => {
  const [param] = useSearchParams();
  const videoId = param.get("v");
  const [videoDetails, SetVideoDetails] = useState({});
  const [channelDetails, SetChannelDetails] = useState({});

  useEffect(()=>{
    GetVideoDetails()
  },[]);


  async function GetVideoDetails(){
  const videoDetails = await GetData(YOUTUBE_VIDEO_BY_ID + `id=${videoId}&key=${YOUTUBE_API_KEY}`);
  SetVideoDetails(videoDetails?.items[0]);
  const channelDetails = await GetData(YOUTUBE_CHANNEL_BY_ID + `id=${videoDetails?.items[0]?.snippet?.channelId}&key=${YOUTUBE_API_KEY}`)
  SetChannelDetails(channelDetails?.items[0]);
  console.log(channelDetails?.items[0]?.snippet?.thumbnails);
};

  return (
    
    <div className="px-24 py-4">
        <div className="w-[60%] h-96 border-black border-solid shadow-xl m-1">
          <iframe className="w-[100%] h-[100%]" 
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        </div> 
        <div>
          <ul>
            <li className = " text-base font-bold break-words">
              {videoDetails?.snippet?.title}
            </li>
            <li className="flex py-3">
              <img className=" rounded-t-full h-10" alt="channelImg" src={channelDetails?.snippet?.thumbnails?.high?.url} />
              <h3 className=" font-bold font-sans text-base"> {channelDetails?.snippet?.title} </h3>
            </li>
          </ul>
        </div>
    </div>
    
  )
}

export default WatchVideo