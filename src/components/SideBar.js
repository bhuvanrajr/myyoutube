import React from 'react'
import { useSelector } from "react-redux"


const SideBar = () => {
  const showSideBar = useSelector(store=> store.side.showSideBar);
  if(!showSideBar) return null;
  return (
    <div className="p-5 shadow-lg w-[15%] h-full">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
    </div>
  )
}

export default SideBar