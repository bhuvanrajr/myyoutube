import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import SearchIcn from "../images/searchIcn.jpg"
import UserIcn from "../images/userIcn.png"
import { toggleSidebar } from "../utilities/SidebarSlice"


const Header = () => {
  const dispatcher = useDispatch();
  const [searchTxt, SetSearchTxt] = useState("Search");

  return (
    <div className='grid grid-flow-col m-2 p-2'>
        <div className='flex col-span-1'>
          
            <img 
                className='h-5 cursor-pointer' 
                alt='menu' 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                onClick={()=>dispatcher(toggleSidebar())}
                />
            <a href="/">
            <img 
                className='h-5 mx-5' 
                alt='logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
            </a>
        </div>
        <div className='flex col-span-10 px-40'>
            <input className=" w-4/5 rounded-l-full h-9 
            border border-gray-400 text-gray-600 
            indent-3 focus:outline-none focus:border-gray-400 block rounded-md sm:text-sm" 
            value={searchTxt} 
            type="text"
            onFocus={()=>{SetSearchTxt("");}}
            onChange = {(e)=>{SetSearchTxt(e.target.value);}}></input>
            <button className='border border-gray-400 rounded-r-full w-10'>
              <img className='h-5 mx-2' 
              alt='logo' 
              src={SearchIcn}
              />
            </button>
        </div>
        <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src={UserIcn}
        />
        </div>
    </div>
  )
}

export default Header