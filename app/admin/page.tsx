"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/subscribers`
        );
        const data = await res.json();
        setSubscriberCount(data.length);
      } catch (error) {
        console.error("Failed to fetch subscribers");
      }
    };
    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/appointment`
        );
        const data = await res.json();
        setAppointmentCount(data.data.length);
      } catch (error) {
        console.error("Failed to fetch subscribers");
      }
    };

    fetchSubscribers();
    fetchAppointments();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Email Subscribers</p>
          <p className="text-2xl font-bold">{subscriberCount}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Queries</p>
          <p className="text-2xl font-bold">{appointmentCount}</p>
        </div>
      </div>
    </div>
  );
}
