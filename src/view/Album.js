import React from "react"; 
import { Link } from "react-router-dom";

const Album = props => {
    
    const updateAlbumList = () => {
        
    }
    const addAlbum = (e) => {
        e.preventDefault();
        props.setAlbums(state => {
            return [...state,{id:props.allAlbums.length +1, title:e.target.albumName.value,year:e.target.albumYear.value}]
        })
      e.target.reset()  
    }

        return(
        <div>
            <h1>Albums</h1>  
            <ul>
                {
                    props.allAlbums.map(albumObj => {    
                        return(
                            <li key={albumObj.id}>
                                <Link to={`/albums/album/${albumObj.id}`}>{albumObj.title}({albumObj.year})</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <h2>Add a new album</h2>
            <form onSubmit={addAlbum}>
                <input name="albumName" placeholder="add album name" onBlur={updateAlbumList}  />
                <input  name="albumYear" placeholder="add album year"/>
                <button >Add new album</button>  
            </form>
            
        </div>
    )  
}
export default Album