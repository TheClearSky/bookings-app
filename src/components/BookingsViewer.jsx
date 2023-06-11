import React, { useEffect, useState } from 'react';
import "./BookingsViewer.css";
import axios from 'axios';
import BookingRow from './BookingRow';
import Pages from './Pages';

let pageSize=20;
export default function BookingsViewer() {
    const [bookingData, setBookingData] = useState([]);
    const [currentPageNumber,setCurrentPageNumber]=useState(1);
    const [activeTab,setActiveTab]=useState("Active");
    useEffect(() => {
        //to cancel request on unmount
        const controller = new AbortController();
        async function fetchBookingData() {
            try {
                const response = await axios.get("https://upride-internships-default-rtdb.firebaseio.com/.json", { signal: controller.signal });
                const merged = { ...response.data.offline_bookings, ...response.data.online_bookings };
                let mergedarray = [];
                for (const bookingkey in merged) {
                    mergedarray.push(merged[bookingkey]);
                }
                mergedarray = mergedarray.filter((booking) => booking.bookingEpochTime);
                mergedarray.sort(({ bookingEpochTime: timestamp1 }, { bookingEpochTime: timestamp2 }) => {
                    return timestamp2 - timestamp1;
                });
                setBookingData(mergedarray);
            }
            catch (err) {

            }
        }
        fetchBookingData();
        //if unmounted, cancel the request
        return () => controller.abort();
    }, []);
    const currentTabData=bookingData.filter((({bookingStatus})=>{
        switch(bookingStatus)
        {
            case "SUCCESS":
                return activeTab=="Active";
            case "COMPLETED":
                return activeTab=="Completed";
            case "CANCELLED":
                return activeTab=="Cancelled";
        }
    }))
    let rows=null;
    if(currentTabData)
    {
        rows=currentTabData.slice((currentPageNumber-1)*pageSize,currentPageNumber*pageSize).map(({userName,bookingEpochTime,packageTitle,offlineBooking,bookingID,workshopImage})=>
        <BookingRow key={bookingID} name={userName} timestamp={bookingEpochTime} packageDetails={packageTitle} isOfffline={offlineBooking} imagelink={workshopImage}/>)
    }
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
                <div 
                    className={"tab"+((activeTab=="Active")?" selected":"")}
                    onClick={()=>{setActiveTab("Active"); setCurrentPageNumber(1);}}
                >Active
                </div>
                <div 
                    className={"tab"+((activeTab=="Completed")?" selected":"")}
                    onClick={()=>{setActiveTab("Completed"); setCurrentPageNumber(1);}}
                >Completed
                </div>
                <div 
                    className={"tab"+((activeTab=="Cancelled")?" selected":"")}
                    onClick={()=>{setActiveTab("Cancelled"); setCurrentPageNumber(1);}}
                >Cancelled
                </div>
            </div>
            <table className="datatable">
                <thead>
                    <tr className="datacolumnheadings">
                        <th>Name</th>
                        <th>Date</th>
                        <th>Package Details</th>
                        <th>Payment Mode</th>
                    </tr>
                </thead>
                <tbody className="datarows">
                    {currentTabData && rows}
                </tbody>
            </table>
            {currentTabData && (currentTabData.length>pageSize) &&
            <Pages currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} totalItems={currentTabData.length} itemsInOnePage={pageSize}/>}
        </div>
    )
}
