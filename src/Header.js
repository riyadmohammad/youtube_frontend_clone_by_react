import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core'; 
import {Link} from "react-router-dom";

function Header(){


        const [inputSearch, setInputSearch] = useState("") ;

        
          return (
            <div className="header">
              <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>

                </Link>
                
                
                </div>
                <div className="header__inputs">
                <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
               

               <Link to={`/search/${inputSearch}`}>
               <SearchIcon className="header__inputButton" />
               
               </Link>

                
                </div>

                <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="" src="https://avatars1.githubusercontent.com/u/61389730?s=460&u=b96fb64230ea369e850c59cfed47b9882a82dc6f&v=4"/>

                </div>
             
                


            </div>
        )
    }

export default Header
