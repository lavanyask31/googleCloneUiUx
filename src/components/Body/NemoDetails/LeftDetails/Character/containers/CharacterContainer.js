import React,{useState,useEffect} from "react";

import CharacterComponent from "../components/CharacterComponent";

import bruce from "../img/bruce.jfif";
import coral from "../img/coral.jfif";
import crush from "../img/crush.jfif";
import darla from "../img/darla.jfif";
import gill from "../img/gill.jfif";
import marlin from "../img/marlin.jfif";
import nemo from "../img/nemo.jfif";
import ray from "../img/ray.jfif";
import squirt from "../img/squirt.jfif";
import $ from 'jquery';
export default function CharacterContainer(){

    const images=[
        {"name":"Albert Brooks","photo":marlin,"character":"Marlin"},
        {"name":"LuLu Ebeling","photo":darla,"character":"Darla"},
        {"name":"Willem Dafoe","photo":gill,"character":"Gill"},
        {"name":"Barry Humphries","photo":bruce,"character":"Bruce"},
        {"name":"Andrew Stanton","photo":crush,"character":"Crush"},
        {"name":"Alexander Gould","photo":nemo,"character":"Nemo"},
        {"name":"Nicholas Bird","photo":squirt,"character":"Squirt"},
        {"name":"Elizabeth Perkins","photo":coral,"character":"Coral"},
        {"name":"Bob Peterson","photo":ray,"character":"Mr.Ray"} 
    ]

    const [far,setFar]=useState(0);
    const [pos,setPos]=useState(0);

    const  scroll=(direction)=>{
        setFar($( '.character-card' ).width()/3*direction)
        setPos($('.character-card').scrollLeft() + far)
    }

    useEffect(() => {
        $('.character-card').animate( { scrollLeft: pos }, 750);
    }, [scroll]);

  
    return(
        <CharacterComponent images={images} scroll={scroll}/>
    )
}