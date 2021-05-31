import React from 'react'
import "./Navigation.css"
import send from "../../images/send.png"
import home from "../../images/home.png"
import heart from "../../images/heart.png"
import explore from "../../images/explore.png"
import search from "../../images/search.png"
function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__container">
                <div className="navigation__logo">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                </div>
                <div className="navigation__search">
                    <img class="search__icon"src={search} alt="search" />
                    <span class="search__text">Search</span>
                </div>
                <div className="navigation__icons">
                    <img class="navigation__icon" src={home} alt="home" />
                    <img class="navigation__icon" src={send} alt="send" />
                    <img class="navigation__icon" src={explore} alt="explore" />
                    <img class="navigation__icon" src={heart} alt="heart" />
                </div>
            </div>
        </div>
    )
}

export default Navigation
