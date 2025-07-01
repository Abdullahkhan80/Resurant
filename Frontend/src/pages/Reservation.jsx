import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Reservation = () => {

  const [firstName, setfirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate();


  const handleReservation = async (e) => {
   console.log({ firstName, lastName, email, date, time, phone });
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstname: firstName,
          lastname: lastName,
          email,
          phone,
          time,
          date
         },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true, // Only if needed
        }
      );
      setfirstName("");
      setLastName("");
      setDate("");
      setEmail("");
      setTime('');
      setPhone("");
      navigate("/sucess");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };



return (
  <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Reserve a Table</h2>

  <form onSubmit={handleReservation}  className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" value={firstName} onChange={(e)=> setfirstName (e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="time">Time</label>
          <input type="time" id="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <button type="submit"  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 mt-4">Reserve Now</button>
      </form>

    </div>
  </section>
);
};

export default Reservation; 