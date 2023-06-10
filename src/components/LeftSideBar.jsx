import React from 'react';
import "./LeftSideBar.css";
import BranchSelector from './BranchSelector';
import PageMenu from './PageMenu';
import Branch from './Branch';

export default function LeftSideBar() {
  return (
    <div className='leftsidebar'>
        <img src="/logo.svg" alt="logo" title="logo" className="logo" />
        <BranchSelector locationtitle="Rajarajeshwari Nagar"> 
            <Branch branchname="Branch2" selected={true}/>
            <Branch branchname="Branch3"/>
        </BranchSelector>
        <PageMenu/>

        <div className="futurefeaturebox"></div>
    </div>
  )
}
