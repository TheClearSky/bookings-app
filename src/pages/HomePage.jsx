import React from 'react';
import "./HomePage.css";
import TopBar from '../components/TopBar';
import BookingsViewer from '../components/BookingsViewer';

export default function HomePage() {
  return (
    <div className="homepage">
        <TopBar/>
        <BookingsViewer/>
    </div>
  )
}
