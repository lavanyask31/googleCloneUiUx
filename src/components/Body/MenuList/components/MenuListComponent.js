import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function MenuListComponent(){
    return(<>
    <div className="Menu-List">
        <div className="Menu-List1">
        <div className="all">
            <SearchIcon className="icon-menu"/>
         <p>All</p>
        </div>
        <div className="image">
            <ImageIcon className="icon-menu"/>
            <p>Images</p>
        </div>
        <div className="videos">
            <OndemandVideoIcon className="icon-menu"/>
            <p>Videos</p>
        </div>
        <div className="news">
            <AnnouncementIcon className="icon-menu"/>
            <p>News</p>
        </div>
        <div className="shopping">
            <LocalOfferIcon className="icon-menu"/>
            <p>Shopping</p>
        </div>
        <div className="more">
            <MoreVertIcon className="icon-menu"/>
            <p>More</p>
        </div>
        </div>
        <div className="Menu-List2">
            <div className="tools">
                <p>Tools</p>
            </div>
        </div>
    </div>
    
    </>)
}