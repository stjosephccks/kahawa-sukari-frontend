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

            {/* Sunday — split parish cards */}
            <div>
              <h3 className="font-medium text-lg mb-3">Sunday</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white rounded-md shadow-sm overflow-hidden">
                  <div className="bg-purple-100 px-4 py-2">
                    <p className="text-xs font-medium text-purple-800">
                      St Joseph Kahawa Sukari
                    </p>
                  </div>
                  <div className="px-4 py-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-sm">8:00 am</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">
                        Kiswahili
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-sm">10:00 am</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        English
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-sm">12:00 noon</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        English
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-md shadow-sm overflow-hidden">
                  <div className="bg-purple-100 px-4 py-2">
                    <p className="text-xs font-medium text-purple-800">
                      St John Paul <i>II</i> – Kahawa Wendani
                    </p>
                  </div>
                  <div className="px-4 py-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-sm">8:30 am</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">
                        Kiswahili
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-sm">10:30 am</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">
                        Kiswahili
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
              <p className="text-gray-600">20 minutes before each mass</p>
            </div>
          </div>
        </div>

        {/* Eucharistic Adoration */}
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Eucharistic Adoration & Morning Prayer
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium text-lg">St Joseph Church</h3>
                    <p className="text-gray-600">Monday - Saturday: <b>6:45 am</b></p>
                    <p className="text-gray-500 text-sm mt-1">Includes Morning Prayer</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-lg">
                          St Joseph Catholic Church Kahawa Sukari
                        </h3>
                        <p className="text-gray-600">2<sup>nd</sup> Wednesday of the month at <b>7:00pm</b></p>
                        <p className="text-gray-500 text-sm mt-1">Eucharistic Adoration</p>
                      </div>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 mt-1">
                        Monthly
                      </span>
                    </div>
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
              <p className="text-gray-600">7:00 am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MassSchedule;