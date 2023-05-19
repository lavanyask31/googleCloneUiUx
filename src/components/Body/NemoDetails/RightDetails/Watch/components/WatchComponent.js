import React, { useState} from "react";
import appletv from "../img/appletv.png";

import CheckIcon from '@material-ui/icons/Check';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';



export default function WatchComponent(){
    const [watchState,setWatchState]=useState("Already watched");
 
    const tick=()=>{
        if(document.getElementById('tick-watch2').style.color==='green'){
            document.getElementById('tick-watch2').style.color='rgb(51, 47, 47)';
            document.getElementById('tick-watch2').style.backgroundColor='white';
            setWatchState("Already Watched");
        }else{
            document.getElementById('tick-watch2').style.color='green';
            document.getElementById('tick-watch2').style.backgroundColor='lightgreen';
            setWatchState("Watched")
        }
         }
    const want=()=>{
        if(document.getElementById('want-watch3').style.color==='green'){
            document.getElementById('want-watch3').style.color='rgb(51, 47, 47)';
            document.getElementById('want-watch3').style.backgroundColor='white';
        }else{
            document.getElementById('want-watch3').style.color='green';
            document.getElementById('want-watch3').style.backgroundColor='lightgreen';
        }
        
        }
    return(
   <div className="watch">
<div className="watch-title">
    <h3>Watch Movie</h3>
    <h5>EDIT SERVICES</h5>
</div>
<div className="watch-body">
    <div className="watch-1">
        <img src={appletv} alt="appletv"/>
        <h5>Watch now</h5>
        <p >$450.00</p>
    </div>

    <div className="watch-2">
    <CheckIcon className="watch2" onClick={tick} id="tick-watch2"/>
   <p >{watchState}</p>  
    </div>
    
    <div className="watch-3">
    <TurnedInNotRoundedIcon className="watch3" onClick={want} id="want-watch3"/>
    <p>Want to watch</p>
    </div>
</div>
   </div>
    )
}