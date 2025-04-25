import React from "react";

function MassSchedule() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Mass & Prayer Schedule
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mass Times */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Mass Times
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Tuesday - Friday</h3>
              <p className="text-gray-600">7:30 am & 6:00 pm</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Monday & Saturday</h3>
              <p className="text-gray-600">7:30 am</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Sunday</h3>
              <p className="text-gray-600">
                7:30 am, 9:00 am, 10:30 am, 12:00 noon
              </p>
            </div>
          </div>
        </div>

        {/* Confessions */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Confessions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Tuesday - Friday</h3>
              <p className="text-gray-600">5:30 pm</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Sunday</h3>
              <p className="text-gray-600">7:30 am - 11:30 am</p>
            </div>
          </div>
        </div>

        {/* Eucharistic Adoration */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Eucharistic Adoration
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">In the Church</h3>
              <p className="text-gray-600">Monday - Saturday: 7:00 am</p>
            </div>
          </div>
        </div>

        {/* Holy Rosary */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Holy Rosary
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Tuesday - Friday</h3>
              <p className="text-gray-600">5:30 pm</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-lg">Sunday</h3>
              <p className="text-gray-600">7:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassSchedule;
