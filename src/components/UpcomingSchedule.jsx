import React from 'react';
import { Activity, Calendar } from 'lucide-react';

const upcomingAppointments = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'General Health Checkup', time: '09:00 AM', type: 'checkup' },
      { title: 'Visit Ophthalmologist', time: '11:30 AM', type: 'specialist' },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Visit Cardiologist', time: '10:00 AM', type: 'specialist' },
      { title: 'Visit Neurologist', time: '2:00 PM', type: 'specialist' },
    ],
  },
];

const SimpleAppointmentCard = ({ appointment }) => {
  const isCheckup = appointment.type === 'checkup';
  const bgColor = isCheckup ? 'bg-green-50' : 'bg-yellow-50';
  const iconColor = isCheckup ? 'text-green-600' : 'text-yellow-600';

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg ${bgColor} hover:shadow-md transition`}>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
          {isCheckup ? (
            <Activity className={`w-4 h-4 ${iconColor}`} />
          ) : (
            <Calendar className={`w-4 h-4 ${iconColor}`} />
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{appointment.title}</p>
          <p className="text-xs text-gray-500">{appointment.time}</p>
        </div>
      </div>
    </div>
  );
};

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Appointments</h3>

      <div className="space-y-6">
        {upcomingAppointments.map((dayData, dayIndex) => (
          <div key={dayIndex}>
            <h4 className="text-sm font-medium text-gray-600 mb-3">📅 On {dayData.day}</h4>

            <div className="space-y-2">
              {dayData.appointments.map((appointment, index) => (
                <SimpleAppointmentCard key={index} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
