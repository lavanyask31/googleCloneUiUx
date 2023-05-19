import React, { useEffect, useState } from "react";
import HeadBarComponent from '../component/HeadBarComponent';

export default function HeadBarContainer(){

const [thememode,setThememode]=useState("light-mode");

// const [searchEle,setSearchEle]=useState("dark-mode")
// const onSearch=(searchTerm)=>{
//   console.log("searching.....",searchTerm)
// }
// const onChange=(event)=>{
//   setSearchEle(event.target.value);
// }
//  ************switch theme 
const toggleTheme=()=>{
  // alert(document.body.className)
  thememode==="dark-mode"?setThememode("light-mode"):setThememode("dark-mode")
}
useEffect(()=>{
  document.body.className=thememode;
    },[thememode])

   return(
    <HeadBarComponent toggleTheme={toggleTheme}/>
   )
 }

