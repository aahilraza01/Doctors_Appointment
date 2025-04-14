import { useState } from "react";

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = date.getDay(); // 0 (Sun) to 6 (Sat)
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Fill empty slots before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Fill actual dates
    for (let i = 1; i <= lastDate; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const days = getDaysInMonth(currentYear, currentMonth);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentYear, currentMonth + offset, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">
          {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          →
        </button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600">
        {dayNames.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1 mt-2">
        {days.map((date, idx) => {
          const isToday =
            date &&
            date.toDateString() === new Date().toDateString();
          const isSelected =
            selectedDate && date?.toDateString() === selectedDate.toDateString();

          return (
            <div
              key={idx}
              className={`h-12 flex items-center justify-center text-sm rounded cursor-pointer transition-all ${
                date
                  ? isSelected
                    ? "bg-blue-600 text-white"
                    : isToday
                    ? "border border-blue-500 text-blue-600"
                    : "hover:bg-blue-100"
                  : ""
              }`}
              onClick={() => date && handleDateClick(date)}
            >
              {date ? date.getDate() : ""}
            </div>
          );
        })}
      </div>

      {/* Selected Date */}
      {selectedDate && (
        <div className="mt-4 text-center text-blue-600 font-medium">
          Selected: {formatDate(selectedDate)}
        </div>
      )}
    </div>
  );
}
