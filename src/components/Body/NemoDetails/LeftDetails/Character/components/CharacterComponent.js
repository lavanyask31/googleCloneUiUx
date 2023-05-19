import React from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function CharacterComponent({images,scroll}){

    return(
   <div className="character">
  <div className="character-heading">
  <h4>Character</h4>
    <KeyboardArrowRightIcon className="arrow-icon"/>
  </div>
  <div className="character-body">
    <KeyboardArrowLeftIcon className="slide-btn-left" onClick={() => scroll(-1)}/>
    <KeyboardArrowRightIcon className="slide-btn-right"onClick={() => scroll(1)}/>
    <div class="character-card">
                {images.map((img,index)=>(
                        <div className="character-card-item" key={img.character}>
                            <img src={img.photo} alt={img.character}/>
                            <div className="character-card-content">
                            <a href="#"><h4>{img.character}</h4></a>
                            <h6>{img.name}</h6>
                            </div>
                            </div>
                        ))}
              </div>
  </div>
   </div>
)
}