import React from "react";
import findnemo from "../img/findnemo.jfif";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function TitleListComponent(){
    return(
    <div class="title-list">
       <div class="search-count">
        <p>About 2,63,00,000 results(0.73 seconds)</p>
       </div>
       <div class="title-list-details">
        <div class="film-name">
            <div class="film-name-img">
            <img src={findnemo} alt="findnemo"/> 
            </div>
            <div class="film-name-details">
                <h3>Finding Nemo</h3>
                <p><label>CBFC:U</label>  2003 . Family/Adventure . 1h 40m<MoreVertIcon class="film-name-details-icon"/></p>  
            </div>
        </div>
        <div class="film-menu">
            <button href="#">Overview</button>
            <button href="#">Character</button>
            <button href="#">Cast</button>
            <button href="#">Watch movie</button>
            <button href="#">Trailers and Clips</button>
            <ArrowDropDownIcon className="film-menu-icon"/>
        </div>
       </div>
    </div>
    )
}