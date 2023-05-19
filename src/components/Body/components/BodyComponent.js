import React from "react";
import MenuList from "../MenuList";
import TitleList from "../TitleList";
import NemoDetails from "../NemoDetails";


export default function BodyComponent(){
    return(
   <div className="body">
    <MenuList/>
    <TitleList/>
    <hr className="title-nemo-line"/>
    <NemoDetails/>
   </div>
    )
}