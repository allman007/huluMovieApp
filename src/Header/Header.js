import React from "react";
import "./Header.css";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const Header = () => {
  return (
    <di className="header">
      <div className="header__icons">
        <div
          className="header__icon 
        header__icon--active"
        >
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
        alt=""
      />
    </di>
  );
};

export default Header;
