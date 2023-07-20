import { Add, PlayArrow,  ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listitem.scss"
import { useState } from "react"

export default function Listitem({index}) {
  const[isHovered,setIsHovered]=useState(false);
  const trailer ="https://www.youtube.com/embed/X7lRGozX8KQ"
  return (
    <div className="listItem" 
    style={{left:isHovered && index *225-50 + index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://etvbharatimages.akamaized.net/etvbharat/prod-images/768-512-17509987-156-17509987-1673965111367.jpg" 
        alt="" />
        {isHovered &&(
          <>
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>
            
          </div>
          <div className="itemInfoTop">
            <span>1 hour 49 mins </span>
            <span className="limit">+10</span>
            <span>2013</span>
          </div>
          <div className="desc">
          Adipurush is an upcoming Indian epic mythological film based on the Hindu epic Ramayana. The film is written and directed by Om Raut and produced by T-Series and Retrophiles.
          </div>
          <div className="genre">Action</div>
        </div>
        </>
        )}
    </div>
  )
}


