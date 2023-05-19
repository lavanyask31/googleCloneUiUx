import React,{useState,useEffect,useRef} from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function CastComponent({images,scroll}){


 
    return(
        <div className="cast">
            <div className="cast-heading" >
                <h4>Cast</h4>
                <KeyboardArrowRightIcon  className="arrow-icon" />
            </div>
            <div className="cast-body">
                {/* <KeyboardArrowLeftIcon className="slide-btn-left" onClick={slidePrev}/>
                <KeyboardArrowRightIcon className="slide-btn-right"onClick={slideNext}/> */}
                
                <KeyboardArrowLeftIcon className="slide-btn-left" onClick={() => scroll(-1)}/>
                <KeyboardArrowRightIcon className="slide-btn-right"onClick={() => scroll(1)}/>
                <div className="cast-card" >
                {images.map((img,index)=>(
                        <div className="cast-card-item" key={img.name}>
                            <img src={img.photo} alt={img.name}/>
                            <div className="cast-card-content">
                            <a href="#"><h4>{img.name}</h4></a>
                            <h6>{img.character}</h6>
                            </div>
                            </div>
                        ))}
              </div>
            </div>
        </div>  
    )
}