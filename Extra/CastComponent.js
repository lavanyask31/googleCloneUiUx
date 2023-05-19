import React,{useState} from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BtnSlider from "./BtnSlider";

export default function CastComponent({images,prevSlide,nextSlide}){
    return(
        <div className="cast">
            <div className="cast-heading">
                <h4>Cast</h4>
                <KeyboardArrowRightIcon />
            </div>
            <div className="cast-body">
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                {/* <div className="prev-slide">
                <KeyboardArrowLeftIcon onClick={prevSlide}/>
                </div> */}
               
                 {images.map((img,index)=>(
                        <div className="cast-card" key={img.name}>
                            <img src={img.photo} alt={img.name}/>
                            <div className="cast-card-content">
                            <a href="#"><h4>{img.name}</h4></a>
                            <h6>{img.character}</h6>
                            </div>
                            </div>
                        ))}
                          <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                        {/* <div className="next-slide">
                        <KeyboardArrowLeftIcon onClick={nextSlide}/>
                        </div> */}
                

            </div>
        </div>  
    )
}