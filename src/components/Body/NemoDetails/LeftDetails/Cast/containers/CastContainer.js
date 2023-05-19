import React,{useState,useEffect} from "react";
import $ from 'jquery';
import CastComponent from "../components/CastComponent";
import andrew from '../img/andrew.jfif';
import alexander from "../img/alexander.jfif";
import albert from "../img/albert.jfif";
import allison from "../img/allison.jfif";
import Barry from "../img/Barry.jfif";
import Bob from "../img/Bob.jfif";
import Brad from "../img/Brad.jfif";
import Ellen from "../img/Ellen.jpg";
import eric from "../img/eric.jfif";
import Geoffrey from "../img/Geoffrey.jfif";
import John from "../img/John.jfif";
import Stephen from "../img/Stephen.jfif";
import vicki from "../img/vicki.jfif";
import Willem from "../img/Willem.jfif";

export default function CastContainer(){

    const images=[
        {"name":"Andrew Stanton","photo":andrew,"character":"Crush"},
        {"name":"Alexander Gould","photo":alexander,"character":"Nemo"},
        {"name":"Albert Brooks","photo":albert,"character":"Marlin"},
        {"name":"Willem Dafoe","photo":Willem,"character":"Gill"},
        {"name":"Ellen DeGeneres","photo":Ellen,"character":"Dory"},
        {"name":"Allison Janney","photo":allison,"character":"Peach"},
        {"name":"Bob Peterson","photo":Bob,"character":"Mr.Ray"},
        {"name":"Stephen Root","photo":Stephen,"character":"Bubbles"},
        {"name":"Brad Garrette","photo":Brad,"character":"Bloat"},
        {"name":"Vicki Lewis","photo":vicki,"character":"Deb,Flo"},
        {"name":"Geoffrey Rush","photo":Geoffrey,"character":"Nigel"},
        {"name":"Eric Bana","photo":eric,"character":"Anchor"},
        {"name":"John Ratzenberger","photo":John,"character":"Fish School"},
        {"name":"Barry Humphries","photo":Barry,"character":"Bruce"}
    ]

    const [far,setFar]=useState(0);
    const [pos,setPos]=useState(0);

    const  scroll=(direction)=>{
    //   console.log($( '.cast-card' ).width());
    //   console.log($( '.cast-card-item' ).width());
    //   console.log(far,pos);
        setFar($( '.cast-card' ).width()/4*direction)
        setPos($('.cast-card').scrollLeft() + far)
    }

    useEffect(() => {
        $('.cast-card').animate( { scrollLeft: pos }, 750);
    }, [scroll]);

    return(<CastComponent images={images} scroll={scroll}/>)
}
