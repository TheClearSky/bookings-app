import React, { useState } from 'react';
import "./BranchSelector.css";

export default function BranchSelector({ locationtitle, children }) {
    const [closed, setClosed] = useState(false);
    return (
        <div className="branchselector">
            <div className="branchselectortitle">
                <img src="/location.svg" alt="location" title="location" className="locationimage" />
                <h2 className="locationtitle">{locationtitle}</h2>
                <div onClick={() => setClosed(prev => !prev)} className={"branchselectordropdown" + (closed ? " closed" : "")}></div>
            </div>
            {(!closed) &&
                <div className="branches">
                    {children}
                </div>}
        </div>
    )
}
