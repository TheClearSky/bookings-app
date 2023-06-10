import React, { useEffect, useState } from 'react';
import "./BookingsViewer.css";

export default function BookingsViewer() {
  const [bookingData,setBookingData]=useState(null);
  useEffect(()=>{

  },[]);
  return (
    <div className="bookingsviewer">
        <div className="bookingsviewertitle">
            <div className="viewertitletext">
                View Bookings
            </div>
            <img src="/viewbookings.svg" alt="viewbookingsicon" className="viewerimage" />
            <div className="futurefeaturebox"></div>
        </div>
        <div className="tabs">
          <div className="tab selected">Active</div>
          <div className="tab">Completed</div>
          <div className="tab">Cancelled</div>
        </div>
    </div>
  )
}
