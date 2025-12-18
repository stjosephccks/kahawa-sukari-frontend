'use client'
import Layout from "@/components/Layout";
import { format } from 'date-fns';

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient('https://yazuptkqzojoqnukmgld.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhenVwdGtxem9qb3FudWttZ2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTU2MzUsImV4cCI6MjA2MzE3MTYzNX0.R0YEJsxb9-WPxsNY_exfHZiOB4MfgGKMVBMjqRVTIDo')

function Bookings() {
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [bookings, setBookings] = useState([]);
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const { data, error } = await supabase.from('bookings').select('*');
            const { data: venuesData, error: venuesError } = await supabase.from('venues').select('*');

            console.log(`Fetched Bookings data: ${JSON.stringify(data)}`)
            console.log(`Fetched Venues data: ${JSON.stringify(venuesData)}`)

            if (error) {
                console.error('Error fetching bookings:', error);
            } else {
                setBookings(data);
                setVenues(venuesData);
                console.log(`Bookings data: ${JSON.stringify(data)}`)
            }
        };
        fetchBookings();
    }, []);
    const bookedVenueIds = Array.from(new Set(bookings.map(b => b.venue_id)));
    const bookedVenues = venues.filter(v => bookedVenueIds.includes(v.id));

    const colorMap = {
        'bg-green-500': 'bg-green-500',
        'bg-blue-500': 'bg-blue-500',
        'bg-teal-500': 'bg-teal-500',
        'bg-pink-500': 'bg-pink-500',
        'bg-red-500': 'bg-red-500',
        'bg-purple-500': 'bg-purple-500',
        'bg-gray-500': 'bg-gray-500',
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-indexed
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
    const calendarDays = [];
    for (let i = 0; i < startDayOfWeek; i++) calendarDays.push(null);
    for (let d = 1; d <= daysInMonth; d++) calendarDays.push(new Date(year, month, d));
    while (calendarDays.length % 7 !== 0) calendarDays.push(null);

    function getBookingsForDay(date) {
        if (!date) return [];
        return bookings.filter(b => {
            const bDate = new Date(b.start_time);
            return bDate.getFullYear() === date.getFullYear() &&
                bDate.getMonth() === date.getMonth() &&
                bDate.getDate() === date.getDate();
        });
    }

    const venueForSelected = selectedBooking ? venues.find(v => v.id === selectedBooking.venue_id) : null;

    return (
        <Layout>
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-blue-700 flex items-center gap-2 sm:pt-12 lg:pt-6">
                <span role="img" aria-label="calendar">📅</span> Bookings
            </h1>
            <div className="mb-4 p-4 border rounded-lg bg-gray-50">
                <h2 className="text-lg font-bold mb-2">Venue Key</h2>
                <div className="flex flex-wrap gap-4">
                    {venues.map(venue => (
                        <div key={venue.id} className="flex items-center gap-2">
                            <span className={`w-4 h-4 rounded-full ${venue.color}`}></span>
                            <span>{venue.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300" onClick={() => setShowModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-full w-[95vw] sm:max-w-md relative animate-fadeIn" onClick={e => e.stopPropagation()}>
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl transition-colors" onClick={() => setShowModal(false)} aria-label="Close">×</button>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-block w-3 h-3 rounded-full ${venueForSelected?.color || 'bg-gray-400'}`}></span>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-700 flex-1 truncate" title={selectedBooking.title}>{selectedBooking.title || 'Booking'}</h3>
                        </div>
                        <div className="mb-2 text-sm text-gray-600 flex items-center gap-2">
                            <span role="img" aria-label="user">👤</span> <span className="font-semibold">Organizer:</span> {selectedBooking.organizer_name || 'Unknown'}
                        </div>
                        <div className="mb-2 text-sm text-gray-600 flex items-center gap-2">
                            <span role="img" aria-label="phone">📞</span> <span className="font-semibold">Contact:</span> {selectedBooking.contact_phone || 'N/A'}
                        </div>
                        <div className="mb-2 text-sm text-gray-600 flex items-center gap-2">
                            <span role="img" aria-label="status">📋</span> <span className="font-semibold">Status:</span> {selectedBooking.status || 'N/A'}
                        </div>
                        <div className="mb-2 text-sm text-gray-600 flex items-center gap-2">
                            <span role="img" aria-label="clock">⏰</span> <span className="font-semibold">When:</span> {format(new Date(selectedBooking.start_time), 'PPpp')} - {format(new Date(selectedBooking.end_time), 'PPpp')}
                        </div>
                        <div className="mb-4 text-sm text-gray-600">
                            <span className="font-semibold">Description:</span> {selectedBooking.description || 'No description'}
                        </div>
                        {venueForSelected && (
                            <div className="mt-4 p-4 rounded-xl border bg-blue-50 shadow-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`inline-block w-3 h-3 rounded-full ${venueForSelected.color || 'bg-gray-400'}`}></span>
                                    <h4 className="font-bold text-blue-800">{venueForSelected.name}</h4>
                                </div>
                                <div className="mb-1 text-sm text-gray-700"><span className="font-semibold">Capacity:</span> {venueForSelected.capacity}</div>
                                <div className="mb-1 text-sm text-gray-700"><span className="font-semibold">Available:</span> {venueForSelected.is_available ? 'Yes' : 'No'}</div>
                                <div className="mb-1 text-sm text-gray-700"><span className="font-semibold">Description:</span> {venueForSelected.description || 'No description'}</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div className="my-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-3 sm:p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl font-bold text-blue-700 flex items-center gap-2">
                        <span role="img" aria-label="calendar">🗓️</span>
                        Calendar View
                        <span className="text-base font-normal text-blue-400 ml-2">({today.toLocaleString('default', { month: 'long', year: 'numeric' })})</span>
                    </h2>
                </div>
                <div className="overflow-x-auto pb-2">
                    <div className="min-w-[600px]">
                        <div className="grid grid-cols-7 gap-2 text-center text-xs sm:text-sm font-semibold text-blue-600 mb-2">
                            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((date, idx) => {
                                const bookingsForDay = getBookingsForDay(date);
                                return (
                                    <div key={idx} className={`min-h-[70px] sm:min-h-[90px] rounded-xl border border-blue-100 bg-white flex flex-col items-start p-1 shadow-sm transition-all duration-200 hover:shadow-md relative group ${date && date.toDateString() === today.toDateString() ? 'ring-2 ring-blue-400' : ''}`}>
                                        <span className="text-xs text-blue-300 mb-1 font-bold">{date ? date.getDate() : ''}</span>
                                        <div className="flex flex-col gap-1 w-full">
                                            {bookingsForDay.length === 0 && date ? (
                                                <span className="text-[10px] text-gray-300 italic">No bookings</span>
                                            ) : bookingsForDay.map(booking => {
                                                const venue = venues.find(v => v.id === booking.venue_id);
                                                const color = colorMap[venue?.color] || 'bg-gray-500';
                                                return (
                                                    <button
                                                        key={booking.id}
                                                        className={`rounded-lg px-2 py-1 text-xs text-white font-medium truncate shadow-md border border-white ${color} hover:scale-105 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 w-full text-left`}
                                                        title={`${booking.title} by ${booking.organizer_name}`}
                                                        onClick={() => {
                                                            setSelectedBooking(booking);
                                                            setShowModal(true);
                                                        }}
                                                        type="button"
                                                    >
                                                        <div className="flex flex-col items-start text-left">
                                                            <span className="truncate w-full" title={booking.title}>{booking.title || 'Booking'}{booking.organizer_name ? ` (${booking.organizer_name})` : ''}</span>
                                                            <span className="text-[10px] font-normal text-gray-100 flex items-center gap-1">
                                                                <span role="img" aria-label="clock">⏰</span> {format(new Date(booking.start_time), 'HH:mm')} - {format(new Date(booking.end_time), 'HH:mm')}
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {date && date.toDateString() === today.toDateString() && (
                                            <span className="absolute top-1 right-2 text-blue-400 text-xs font-bold animate-pulse">Today</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Bookings;