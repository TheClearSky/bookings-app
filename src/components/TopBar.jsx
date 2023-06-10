import React, { useState } from 'react';
import "./TopBar.css";
import Profile from './Profile';

export default function TopBar() {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="topbar">
            <div className="searchbar">
                <input type="text" placeholder="Search Bookings" className="searchbarinput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <img src="/searchicon.svg" alt="search" title="search" className="searchicon" />
            </div>
            <div className="newbookingbutton">
                <img src="/plus.svg" alt="" className="plus" />
                New Booking
            </div>
            <Profile />
        </div>
    )
}
