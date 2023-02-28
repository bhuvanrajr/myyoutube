import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import SearchIcn from "../images/searchIcn.jpg"
import UserIcn from "../images/userIcn.png"
import { toggleSidebar } from "../utilities/SidebarSlice"
import {GetData} from "../utilities/GetData"
import {YOUTUBE_SEARCH_QRY} from "../utilities/Constants"
import { AddSearchResults } from "../utilities/SearchResultSlice"




const Header = () => {
  const dispatcher = useDispatch();
  const storedSearchResults = useSelector(store => store.searchResults);
  const [searchTxt, SetSearchTxt] = useState("");
  const [searchResult, SetSearchResult] = useState({});
  const [showSearchResults, SetShowSearchResults] = useState(false);
  
  async function GetSuggestions(searchText){
    if(searchText!== "" && storedSearchResults[searchText]===undefined)
    {
      const data =  await GetData(YOUTUBE_SEARCH_QRY+searchText);
      dispatcher(AddSearchResults({
        [searchText]:data[1]
      }));
      SetSearchResult(data[1]);
    }
    else
    {
      SetSearchResult(storedSearchResults[searchText]);
    }
  }

  useEffect(()=>{
    const timer = setTimeout(
      ()=>{
        GetSuggestions(searchTxt);
      }
    , 200);
    return ()=>{
      clearTimeout(timer);
    }
    
  },[searchTxt]);

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
        <div className=" col-span-10 px-40">
        <div className='flex w-[100%]'>
            <input className=" w-4/5 rounded-l-full h-9 
            border border-gray-400 text-gray-600 
            indent-3 focus:outline-none focus:border-gray-400 block rounded-md sm:text-sm" 
            value={searchTxt} 
            placeholder="Search"
            type="text"
            onFocus={()=>{
              SetShowSearchResults(true);
            }}
            onBlur ={ ()=>{
              SetShowSearchResults(false);
            }}
            onChange = {(e)=>{SetSearchTxt(e.target.value);}}></input>
            <button className='border border-gray-400 rounded-r-full w-10' onClick={()=>{}}>
              <img className='h-5 mx-2' 
              alt='logo' 
              src={SearchIcn}
              />
            </button>
        </div>
        {showSearchResults && (
            <div className="fixed bg-white w-[42%] shadow-lg rounded-lg border border-gray-100">
              <ul>
              {
                searchResult?.map((s)=>(
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    {s}
                  </li>
                ))
              }
              </ul>
            </div>
          )
        }
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