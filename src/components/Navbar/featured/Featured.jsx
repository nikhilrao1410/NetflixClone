import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss";


export default function Featured({type}) {
  return (
    <div className="featured">
        {type &&(
        <div className="category">
            <span>{type === "movie" ? "Movies":"Series"}</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value ="Advanture">Advanture</option>
                <option value ="Comedy">Comedy</option>
                <option value ="Crime">Crime</option>
                <option value ="Fantasy">Fantasy</option>
                <option value ="Historical">Historical</option>
                <option value ="Horror">Horror</option>
                <option value ="Romance">Romance</option>
                <option value ="Sci-fi">Sci-fi</option>
                <option value ="Thriller">Thriller</option>
                <option value ="Drama">Drama</option>
            </select>
        </div>
        )}
        <img
     width="100%"
     src ="https://images8.alphacoders.com/100/1003220.png" alt=""/>
    <div className="info">
        <img src="https://www.pngmart.com/files/22/Avengers-Endgame-PNG-Image.png" alt="" />
        <span className="desc">
        Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU).
        </span>
        <div className="buttons">
            <buttons className="play">
                <PlayArrow/>
                <span>Play</span>
            </buttons>
            <buttons className="more">
                <InfoOutlined/>
                <span>Info</span>

            </buttons>
             </div>
        
    </div>
    </div>
  )
}
