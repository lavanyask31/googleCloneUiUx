import React from "react";
import LeftDetails from "../LeftDetails";
import RightDetails from "../RightDetails";

export default function NemoDetailsComponent(){
    return(
        <div className="nemo-detail">
            <LeftDetails/>
            <hr className="left-right-line"/>
            <RightDetails/>
        </div>
    )
}