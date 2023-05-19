import React,{useRef} from "react";
import $ from "jquery";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';




export default function AboutComponent(){
    const likebtn=useRef();
    const dislikebtn=useRef();
    const dislike=()=>{
        console.log(dislikebtn.current)
        // if(document.getElementById('dislike').style.color=='gray'){
        //     document.getElementById('like').style.color='gray';
        //     document.getElementById('dislike').style.color='red'; 
        // }
        // else{
         
        //     document.getElementById('dislike').style.color='gray'; 
        // }
        if(dislikebtn.current.style.color=='gray'){
            likebtn.current.style.color='gray';
            dislikebtn.current.style.color='red'; 
        }
        else{
         
            dislikebtn.current.style.color='gray'; 
        }
       
    }
    

    const like=()=>{

    if(document.getElementById('like').style.color=='gray'){
        document.getElementById('like').style.color='rgb(65,65,255)';
        document.getElementById('dislike').style.color='gray';
    }else{
        document.getElementById('like').style.color='gray';
       
    }

   
     
      }
    return(
   <div className="about">
    <div className="about-title">
        <h3>About</h3>
    </div>

    <div className="about-video">
        <a href="https://www.youtube.com/watch?v=SPHfeNgogVs">
            <div className="youtube-link">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SPHfeNgogVs" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="youtube-details">
            <h5>Finding Nemo 3D Trailer</h5>
            <div className="youtube-icon-link">
            <YouTubeIcon className="youtube-icon"/>
            <h6>1:53</h6>
            </div>
            
            </div>
            
        </a>
    </div>

    <div className="about-ratings">
        <div className="IMDb">
            <h5 className="about-ratings-head">8.2/10</h5>
            <h5 className="about-ratings-content">IMDb</h5>
        </div>
        <div className="Rotten">
            <h5 className="about-ratings-head">99%</h5>
            <h5 className="about-ratings-content">Rotten Tomatoes</h5>
        </div>
        <div className="common">
            <h5 className="about-ratings-head">5/5</h5>
            <h5 className="about-ratings-content">Common sense</h5>
        </div>
    </div>

    <div className="about-like">
        <div className="like-content">
            <h5 className="like-content-head">89% liked this film</h5>
            <h5 className="like-content-detail">Google users</h5>
        </div>
        <div className="like-action">
        <ThumbUpAltRoundedIcon className="like-thumbs" onClick={like} id="like"  ref={likebtn}/>
        <ThumbDownAltRoundedIcon className="like-thumbs" onClick={dislike} id="dislike"  ref={dislikebtn}/>
        </div>
    </div>
    
    <div className="about-content">
        <h5>After his son gets adbucted from the Great Barrier Reef and is dispatched to 
            Sydney,Marlin,a meek clownfish,enlists the help of a forgateful fish and
             embarks on a journey to bring him home.</h5>
    </div>
   </div>
    )

}