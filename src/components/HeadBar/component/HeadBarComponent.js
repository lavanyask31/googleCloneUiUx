import React from "react";
import logo from "../img/logo.jpg";

import CloseIcon from '@material-ui/icons/Close';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
var data=require("../models/searchitems.json");


export default function HeadBarComponent({toggleTheme}){
    return(<>
    <div className="head">
        <div className="head-logo">
            {/* <img src={logo} alt="Google"/> */}
            <h1 class="google-logo">Google</h1>
        </div>
        
            
        <form className="head-searchform"> 
        <div className="head-searchbar">
        <input type="text"/>
        {/* value={searchEle} onChange={onChange} */}
            <CloseIcon className="close-icon"/>
             <KeyboardVoiceIcon className="voice-search"/>
             <SearchIcon className="search-icon"/>
            {/* 
            <button>  <CloseIcon/></button>
            <button><KeyboardVoiceIcon/></button>
            <button onClick={()=>onSearch(searchEle)}><SearchIcon/></button>
             */}
               </div>
          </form>
            
           
        <div className="head-menu">

        <SettingsIcon onClick={toggleTheme} className="head-menu-icon"/>
        <AppsIcon className="head-menu-icon"/>
        <AccountCircleIcon className="head-menu-icon"/>
       
      
        
        </div></div></>)
}