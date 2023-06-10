import React from 'react';
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <img src="/profile.jpeg" alt="profileicon" title="profileicon" className="profileicon" />
      <div className="profiletext">Hello Lokesh 👋</div>
    </div>
  )
}
