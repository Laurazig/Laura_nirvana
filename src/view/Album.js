import React from "react"; 
import { Link } from "react-router-dom";

const Album = props => {
    const updateAlbumList = () => {
        
    }
        return(
        <div>
            <h1>Albums</h1>  
            <ul>
                {
                    props.allAlbums.map(albumObj => {    
                        return(
                            <li>
                                <Link to={`/albums/album/${albumObj.id}`}>{albumObj.title}({albumObj.year})</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <h2>Add a new album</h2>
            <form>
                <input placeholder="add album name" onBlur={updateAlbumList}  />
                <input  placeholder="add album year"/>
                <button >Add new album</button>  
            </form>
            
        </div>
    )  
}
export default Album