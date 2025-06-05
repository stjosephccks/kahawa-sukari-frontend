import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedFadeIn from "./AnimatedFadeIn";

export default function AnnouncementDoc() {
    const [isLoading, setIsLoading] = useState(true);
    const [doc, setDoc] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await axios.get("/api/announcement-docs");
                setDoc(response.data[0]);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to load announcements");
                setIsLoading(false);
            }
        };
        fetchAnnouncements();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }
    if (!doc) return <div style={{ textAlign: 'center' }}>There are currently no announcements to display.</div>;



    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <section className="py-8 px-1 sm:px-2 lg:px-8">
            {/* SUNDAY/LITURGICAL SEASON ONLY */}
            <header className="mb-8 text-center">
                {doc.liturgicalSeason && (
                    <h2 className="text-3xl md:text-4xl font-extrabold ttext-primary tracking-tight mb-2 flex items-center justify-center gap-3">
                        <span className="inline-block">{doc.liturgicalSeason}</span>
                        <span className="text-2xl md:text-3xl"></span>
                    </h2>
                )}
                <div className="text-gray-500 text-base md:text-lg mb-1"> Updated:{formatDate(doc.documentDate)}</div>
            </header>

            {/* Mass Schedule Section (Dynamic from API) */}
            <section className="mb-8">
                <AnimatedFadeIn delay={0.05}>
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">This Week's Mass Animation</h2>
                        {doc.massAnimation && (
                            <div className="mb-4 text-pink-700 font-semibold italic text-center">{doc.massAnimation}</div>
                        )}
                        {doc.currentWeekMass && doc.currentWeekMass.length > 0 && (
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full text-sm text-left">
                                    <thead>
                                        <tr className="text-gray-600 border-b">
                                            <th className="py-2 px-2 font-semibold">Time</th>
                                            <th className="py-2 px-2 font-semibold">Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {doc.currentWeekMass.map(mass => (
                                            <tr key={mass._id} className="border-b last:border-b-0">
                                                <td className="py-2 px-2 whitespace-nowrap">{mass.time}</td>
                                                <td className="py-2 px-2 font-medium text-blue-700">{mass.group}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {doc.nextWeekMasses && doc.nextWeekMasses.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold text-primary mt-6 mb-2 text-center">Next Week's Mass Animation</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-left">
                                        <thead>
                                            <tr className="text-gray-600 border-b">
                                                <th className="py-2 px-2 font-semibold">Time</th>
                                                <th className="py-2 px-2 font-semibold">Group</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {doc.nextWeekMasses.map(mass => (
                                                <tr key={mass._id} className="border-b last:border-b-0">
                                                    <td className="py-2 px-2 whitespace-nowrap">{mass.time}</td>
                                                    <td className="py-2 px-2 font-medium text-blue-700">{mass.group}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </AnimatedFadeIn>
            </section>

            {/* Announcements Section */}
            <section className="mb-8">
                <h3 className="text-blue-700 mb-6 text-2xl font-bold flex items-center gap-2 tracking-tight justify-center">📢 <span>Announcements</span></h3>
                <div className="flex flex-col gap-6 w-full">
                    {doc.announcements && doc.announcements.length === 0 && (
                        <div className="text-center text-gray-400 italic">No announcements this week.</div>
                    )}
                    {doc.announcements && doc.announcements.map((ann, i) => {
                        let borderColor = "border-blue-400";
                        let bgColor = "bg-blue-50";
                        if (ann.priority === "High") { borderColor = "border-red-500"; bgColor = "bg-red-50"; }
                        else if (ann.priority === "Medium") { borderColor = "border-orange-400"; bgColor = "bg-orange-50"; }
                        else if (ann.priority === "Low") { borderColor = "border-green-500"; bgColor = "bg-green-50"; }
                        return (
                            <AnimatedFadeIn key={ann._id} delay={i * 0.1}>
                                <article
                                    className={`${bgColor} border-l-4 ${borderColor} rounded-xl p-4 sm:p-6 shadow outline-none transition-all focus:ring-2 focus:ring-blue-300 hover:shadow-lg flex flex-col gap-2`}
                                    tabIndex={0}
                                    aria-label={`Announcement: ${ann.title}`}
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-lg sm:text-xl"></span>
                                        <span className="font-bold text-base sm:text-lg md:text-xl leading-tight">{ann.title}</span>
                                    </div>
                                    <div className="text-gray-800 text-base sm:text-base md:text-lg leading-relaxed whitespace-pre-line">{ann.content}</div>

                                </article>
                            </AnimatedFadeIn>
                        );
                    })}
                </div>
            </section>

            {/* Marriage Bann - LOVE THEME ONLY */}
            {doc.matrimonyNotices && doc.matrimonyNotices.length > 0 && (
                <section className="mb-8">
                    <h3 className="text-pink-600 mb-6 text-2xl font-bold flex items-center gap-3 justify-center tracking-tight">
                        <span className="text-3xl">💒</span>
                        <span>Marriage Bann</span>
                        <span className="text-3xl">💍</span>
                    </h3>
                    <div className="flex flex-col gap-6 w-full">
                        {doc.matrimonyNotices.map((notice, i) => (
                            <AnimatedFadeIn key={notice._id} delay={i * 0.12}>
                                <article
                                    className="relative bg-white/90 border border-pink-200 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col gap-2 items-center text-center ring-2 ring-pink-100 hover:ring-pink-300 transition"
                                    tabIndex={0}
                                    aria-label={`Marriage Bann: ${notice.groomName} & ${notice.brideName}`}
                                >
                                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl">💞</span>
                                    <div className="font-bold text-xl md:text-2xl text-pink-700 mb-1 flex flex-col items-center gap-0">
                                        <span>{notice.groomName}</span>
                                        <span className="text-gray-700 text-base md:text-lg font-normal mt-0.5">S/O {notice.groomParents}</span>
                                    </div>
                                    <div className="text-pink-700 font-semibold text-sm md:text-base mb-2 text-center tracking-wide">INTENDS TO CELEBRATE THE SACRAMENT OF MATRIMONY WITH</div>
                                    <div className="font-bold text-xl md:text-2xl text-pink-700 mb-1 flex flex-col items-center gap-0">
                                        <span> {notice.brideName}</span>
                                        <span className="text-gray-700 text-base md:text-lg font-normal mt-0.5">D/O {notice.brideParents}</span>
                                    </div>
                                    <div className="text-gray-800 text-base md:text-lg mb-1 flex items-center justify-center gap-2">
                                        <span className="text-pink-500">📅</span>
                                        <span className="font-semibold">{formatDate(notice.weddingDate)}</span>
                                    </div>
                                    <div className="text-gray-800 text-base md:text-lg flex items-center justify-center gap-2">
                                        <span className="text-pink-500">📍</span>
                                        <span className="font-semibold">{notice.venue}</span>
                                    </div>
                                    <span className="mt-4 text-3xl animate-pulse">💕</span>
                                </article>
                            </AnimatedFadeIn>
                        ))}
                    </div>
                </section>
            )}
        </section>
    );

    ;
}