import React from 'react';
import "./BookingRow.css";

export default function BookingRow({ name, timestamp, packageDetails, isOfffline,imagelink }) {
    const date = new Date(timestamp);
    const dateinformat = new Intl.DateTimeFormat('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
    return (
        <tr className="booking">
            <td className="namedata">
                <img className="bookingimage" src={imagelink} alt="" />
                {name}</td>
            <td className="datedata">{dateinformat}</td>
            <td className="packagedetailsdata">{packageDetails}</td>
            {(isOfffline) ?
                <td className="paymentmodedata offline"><div>Offline Payment</div></td>
                :
                <td className="paymentmodedata online"><div>Online Payment</div></td>}
        </tr>
    )
}
