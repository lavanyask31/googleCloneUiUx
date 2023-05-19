import React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'; 

export default function BtnSlider({moveSlide,direction}){
    console.log(moveSlide,"and",direction)
    return(
        <div className='card-slide'>
            <button 
            onClick={moveSlide}
            className={direction==="next"? "slide-next":"slide-prev"}>
                {direction=="next"?<KeyboardArrowRightIcon/>:<KeyboardArrowLeftIcon/>}
            {/* <KeyboardArrowRightIcon onClick={moveSlide}/> */}
            </button>
        </div>
    )
}