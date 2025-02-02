import React, { useEffect, useState } from "react";
import { db } from "../Firebase"; // Path to Firebase config
import { collection, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const [Booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      const querySnapshot = await getDocs(collection(db, "Booking"));
      const BookingList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooking(BookingList);
    };

    fetchBooking();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>All Booked Booking</h2>
      {Booking.length > 0 ? (
        <ul>
          {Booking.map((Booking) => (
            <li key={Booking.id}>
              <p>Name: {Booking.name}</p>
              <p>Email: {Booking.email}</p>
              <p>Phone: {Booking.phone}</p>
              <p>Date: {Booking.date}</p>
              <p>Time: {Booking.time}</p>
              <p>Service Type: {Booking.serviceType}</p>
              <p>Additional Info: {Booking.additionalInfo}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Booking found</p>
      )}
    </div>
  );
};

export default AdminDashboard;
