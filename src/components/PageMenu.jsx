import React from 'react';
import "./PageMenu.css";

export default function PageMenu() {
  return (
    <div className="pagemenu">
        <div className="pagemenubutton selected">
            <img src="/homeicon.svg" alt="home" title="home" className="pagemenuicon" />
            Home
        </div>
        <div className="pagemenubutton">
            <img src="/myearningsicon.svg" alt="myearnings" title="myearnings" className="pagemenuicon" />
            My Earnings
        </div>
        <div className="pagemenubutton">
            <img src="/myservicesicon.svg" alt="myservices" title="myservices" className="pagemenuicon" />
            My Services
        </div>
        <div className="pagemenubutton">
            <img src="/myassetsicon.svg" alt="myassets" title="myassets" className="pagemenuicon" />
            My Assets
        </div>
    </div>
  )
}
