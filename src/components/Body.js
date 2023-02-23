import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'

const Body = () => {
  return (
    <div className="flex">
        <SideBar className ="z-100"/>
        <VideoContainer className = "z-0" />
    </div>
  )
}

export default Body