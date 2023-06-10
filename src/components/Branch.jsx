import React from 'react';
import "./Branch.css";

export default function Branch({branchname,selected}) {
  return (
    <div className="branch">
        <div>{branchname}</div>
        <div className={"selectioncircle"+ (selected?" selected":"")} ></div>
    </div>
  )
}
