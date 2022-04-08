import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Nirvana_logo.jpg";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <Link to="/">
                    <img className="nav_img" src={logo} alt="The NIrvana logo"></img>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/vocals">VOCALS</Link>
                    </li>
                    <li>
                        <Link to="/guitar">GUITAR</Link>
                    </li>
                    <li>
                        <Link to="/bass">BASS</Link>
                    </li>
                    <li>
                        <Link to="/drums">DRUMS</Link>
                    </li>
                    <li>
                        <Link to="/albums">ALBUMS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;