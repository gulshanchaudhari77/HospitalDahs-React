import React from 'react';

const CalendarView = () => {
  const appointments = {
    15: ['09:00', '11:00'],
    18: ['13:00'],
    22: ['15:00'],
    25: ['10:00', '14:00']
  };

  const holidays = [10, 24]; // Red days
  const specialDays = [5, 12, 19]; // Green days

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDay = 5;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">October 2021</h3>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-xl text-gray-500">‹</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-xl text-gray-500">›</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600">
            {day}
          </div>
        ))}

        {Array.from({ length: startDay }, (_, i) => (
          <div key={`empty-${i}`} className="h-14"></div>
        ))}

        {daysInMonth.map(day => {
          let dayClasses = "flex items-center justify-center h-14 w-full rounded text-sm ";

          if (day === 18) {
            dayClasses += "bg-blue-600 text-white font-bold";
          } else if (holidays.includes(day)) {
            dayClasses += "bg-red-100 text-red-700 font-semibold";
          } else if (specialDays.includes(day)) {
            dayClasses += "bg-green-100 text-green-700 font-semibold";
          } else if (appointments[day]) {
            dayClasses += "text-blue-600 font-medium";
          } else {
            dayClasses += "text-gray-700";
          }

          return (
            <div key={day} className="relative">
              <div className={dayClasses}>{day}</div>
              {appointments[day] && day !== 18 && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Appointment cards */}
      <div className="space-y-4 mt-8">
        <div className="p-4 bg-yellow-50 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-md font-semibold text-gray-800">Eye Check-up</h4>
              <p className="text-sm text-gray-600">Dr. Anjali Verma</p>
            </div>
            <span className="text-sm text-yellow-700 font-medium">2:00 PM</span>
          </div>
        </div>

        <div className="p-4 bg-purple-50 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-md font-semibold text-gray-800">Nutrition Counseling</h4>
              <p className="text-sm text-gray-600">Dietician Sharma</p>
            </div>
            <span className="text-sm text-purple-700 font-medium">4:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
