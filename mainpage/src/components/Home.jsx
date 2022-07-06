import React, { useState } from "react";
import Navbar from "./Navbar";
import backgroundimg from "../assets/home.jpg";
import movielogo from "../assets/homeTitle.webp";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
export default function Home(){
   const [isScrolled, setIsScrolled] = useState(false);

   window.onscroll=()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return()=>{window.onscroll = null};
   };

   return(
    <div>
        <Navbar isScrolled={isScrolled}/>
        <div className="hero">
            <img src={backgroundimg} alt="background" className="background-image" />
            <div className="container">
                <div className="logo">
                    <img src={movielogo} alt="Movie logo" />
                </div>
                <div className="buttons flex">
                    <button className="flex j-center a-center">
                    <FaPlay/> Play
                    </button>
                    <button className="flex j-center a-center">
                        <AiOutlineInfoCircle/>More Info
                    </button>

                </div>
            </div>
        </div>
    </div>
   )
}