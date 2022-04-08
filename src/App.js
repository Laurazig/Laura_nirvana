import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Band from "./view/Band";
import Kirt from "./view/Kirt";
import KirtGit from "./view/KirtGit";
import Krist from "./view/Krist";
import Dave from "./view/Dave";
import "./App.css";
import NotFound from "./view/NotFound";
import Album from "./view/Album";
import CurrentAlbum from "./view/CurrentAlbum"

const App = () => {
    const [ albums, setAlbums ] = useState([])
    const [ newAlbumTitle, setNewAlbumTitle ] = useState("");
    const [ newAlbumYear, setNewAlbumYear ] = useState("");
    useEffect(() => {               
        setAlbums(fetchData())
    }, [])

    const fetchData = () => {  
        return [
            {
                id:"1",
                title:"Bleach",
                year: 1989,
            },
            {
                id:"2",
                title:"Nevermind",
                year: 1991,
            },
            {
                id:"3",
                title:"In Utero",
                year: 1993,
            }
        ]
    }
    const updateAlbumList = event => {
            setAlbums(event.target.value)
    }
    return (
        <div>
            <Router>
                <Navigation />
                <main>
                    <Switch>
                        <Route path="/" exact component={Band}/>  
                        <Route path="/vocals" component={Kirt}/>
                        <Route path="/guitar" component={KirtGit}/>
                        <Route path="/drums" component={Dave}/>
                        <Route path="/bass" component={Krist}/>
                        
                        <Route path="/albums" exact>
                            <Album allAlbums={albums} updateAlbumList={updateAlbumList} setAlbums={setAlbums}/>
                        </Route>
                        <Route path="/albums/new-album/:id">
                            <CurrentAlbum  allAlbums={albums} />
                        </Route>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}
export default App;