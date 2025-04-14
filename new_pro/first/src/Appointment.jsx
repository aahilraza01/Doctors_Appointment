import React, { useState } from 'react';

const Appointment = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });

  const [appointments, setAppointments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // Editing existing appointment
      const updated = [...appointments];
      updated[editingIndex] = form;
      setAppointments(updated);
      setEditingIndex(null);
    } else {
      // Adding new appointment
      setAppointments([...appointments, form]);
    }

    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      reason: '',
    });

    alert('Appointment saved!');
  };

  const handleEdit = (index) => {
    setForm(appointments[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
    if (confirmDelete) {
      setAppointments(appointments.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {editingIndex !== null ? 'Edit Appointment' : 'Book an Appointment'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border border-gray-300 rounded"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border border-gray-300 rounded"
            />
          </div>

          <textarea
            name="reason"
            placeholder="Reason for appointment"
            value={form.reason}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            {editingIndex !== null ? 'Update Appointment' : 'Submit Appointment'}
          </button>
        </form>
      </div>

      {/* Appointment List */}
      {appointments.length > 0 && (
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Your Appointments</h3>
          <div className="space-y-4">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="bg-white shadow p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <p><strong>Name:</strong> {appt.name}</p>
                  <p><strong>Date:</strong> {appt.date} @ {appt.time}</p>
                  <p><strong>Reason:</strong> {appt.reason}</p>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
