import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedFadeIn from "./AnimatedFadeIn";
import CacheQueue from "@/utils/cacheQueue";

export default function AnnouncementDoc() {
    const [isLoading, setIsLoading] = useState(true);
    const [docs, setDocs] = useState([]);
    const [selectedDocIndex, setSelectedDocIndex] = useState(0); // 0 = most recent
    const [error, setError] = useState(null);
    const [cache] = useState(() => new CacheQueue('announcement_docs'));

    const processAnnouncements = (announcements) => {
        const sortedDocs = [...announcements].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setDocs(sortedDocs);
        return sortedDocs;
    };

    const fetchAnnouncements = async (forceRefresh = false) => {
        try {
            setIsLoading(true);
            let data = null;
            
            // Always try to get cached data first for immediate response
            const cachedData = cache.getLatest();
            
            // Only use cached data if not forcing refresh and it exists
            if (!forceRefresh && cachedData) {
                processAnnouncements(cachedData);
                setIsLoading(false);
                
                // Still fetch fresh data in background to check for updates
                fetchAnnouncements(true).catch(console.error);
                return;
            }

            // If we reach here, either we're forcing refresh or no valid cache exists
            try {
                const response = await axios.get("/api/announcement-docs");
                data = response.data || [];
                
                // Only update cache if we got valid data
                if (Array.isArray(data) && data.length > 0) {
                    cache.enqueue(data);
                    processAnnouncements(data);
                } else if (cachedData) {
                    // If no data from API but we have cached data, use that
                    processAnnouncements(cachedData);
                } else {
                    // No data from either source
                    setDocs([]);
                }
            } catch (apiError) {
                console.error('API Error:', apiError);
                // If API fails but we have cached data, use that
                if (cachedData) {
                    processAnnouncements(cachedData);
                } else {
                    setError("Failed to load announcements. Please check your connection.");
                    setDocs([]);
                }
            }
            
            setIsLoading(false);
        } catch (err) {
            console.error('Unexpected error:', err);
            setError("An unexpected error occurred while loading announcements");
            setDocs([]);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    // Matrimony Bann Counter Map: {"groomName|brideName": count}
    const bannCountMap = {};
    docs.forEach(doc => {
        if (doc.matrimonyNotices) {
            doc.matrimonyNotices.forEach(notice => {
                const key = `${notice.groomName}|${notice.brideName}`;
                bannCountMap[key] = (bannCountMap[key] || 0) + 1;
            });
        }
    });

    // For the selected doc, compute bann number for each notice
    function getBannNumber(notice) {
        // Always count from oldest to selected doc (chronological order)
        // docs are currently sorted most recent first, so reverse for counting
        const docsChrono = [...docs].reverse();
        // The index in chronological order for the selected doc
        const chronoIndex = docs.length - 1 - selectedDocIndex;
        let count = 0;
        for (let i = 0; i <= chronoIndex; i++) {
            const d = docsChrono[i];
            if (d.matrimonyNotices) {
                d.matrimonyNotices.forEach(n => {
                    if (n.groomName === notice.groomName && n.brideName === notice.brideName) {
                        count++;
                    }
                });
            }
        }
        return count;
    }

    const doc = docs[selectedDocIndex] || null;

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
            {/* Announcement Doc Switcher */}
            {docs.length > 1 && (
                <div className="flex justify-center mb-6">
                    <select
                        className="border rounded px-3 py-2 text-base shadow-sm focus:ring focus:ring-primary"
                        value={selectedDocIndex}
                        onChange={e => setSelectedDocIndex(Number(e.target.value))}
                        aria-label="Select announcement document"
                    >
                        {docs.map((d, idx) => (
                            <option value={idx} key={d._id}>
                                {idx === 0 ? 'Most Recent' : `Past: ${formatDate(d.documentDate)}`}
                            </option>
                        ))}
                    </select>
                </div>
            )}

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
                                            <th className="py-2 px-2 font-semibold w-1/2">Time</th>
                                            <th className="py-2 px-2 font-semibold w-1/2 md:text-right">Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {doc.currentWeekMass.map(mass => (
                                            <tr key={mass._id} className="border-b last:border-b-0">
                                                <td className="py-2 px-2 w-1/2">{mass.time}</td>
                                                <td className="py-2 px-2 font-medium text-blue-700 w-1/2 md:text-right">{mass.group}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {doc.nextWeekMasses && doc.nextWeekMasses.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold text-primary mt-6 mb-2 text-center">Next Week's Mass Animation-{doc.nextWeekOccasion}</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-left">
                                        <thead>
                                            <tr className="text-gray-600 border-b">
                                                <th className="py-2 px-2 font-semibold w-1/2">Time</th>
                                                <th className="py-2 px-2 font-semibold w-1/2 md:text-right">Group</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {doc.nextWeekMasses.map(mass => (
                                                <tr key={mass._id} className="border-b last:border-b-0">
                                                    <td className="py-2 px-2 w-1/2">{mass.time}</td>
                                                    <td className="py-2 px-2 font-medium text-blue-700 w-1/2 md:text-right">{mass.group}</td>
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
                        {doc.matrimonyNotices.map((notice, i) => {
                            const isGroupWedding = notice.couples && notice.couples.length > 0;
                            const weddingDate = new Date(notice.weddingDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            });

                            // Get bann text based on bannType
                            const getBannText = (type) => {
                                switch(type) {
                                    case 'I': return '1st Bann';
                                    case 'II': return '2nd Bann';
                                    case 'III': return '3rd Bann';
                                    default: return '';
                                }
                            };

                            return (
                                <AnimatedFadeIn key={notice._id} delay={i * 0.12}>
                                    <article
                                        className="relative bg-white/90 border border-pink-200 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col gap-4 items-center text-center ring-2 ring-pink-100 hover:ring-pink-300 transition"
                                        tabIndex={0}
                                        aria-label={isGroupWedding ? 'Group Wedding Bann' : `Marriage Bann: ${notice.groomName} & ${notice.brideName}`}
                                    >
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl">
                                            {isGroupWedding ? '👰‍♂️🤵‍♀️' : '💞'}
                                        </span>
                                        
                                        {isGroupWedding ? (
                                            <div className="w-full space-y-4">
                                                {notice.couples.map((couple, idx) => (
                                                    <div key={couple._id} className="w-full">
                                                        <div className="font-normal text-xl text-gray-700 mb-1">
                                                            {couple.groomName}
                                                        </div>
                                                        <div className="text-pink-700 font-bold text-sm md:text-base mb-2 text-center tracking-wide">
                                                            INTENDS TO CELEBRATE THE SACRAMENT OF MATRIMONY WITH
                                                        </div>
                                                        <div className="font-normal text-xl text-gray-700 mb-4">
                                                            {couple.brideName}
                                                        </div>
                                                        {idx < notice.couples.length - 1 && (
                                                            <div className="border-t border-pink-100 my-4"></div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                <div className="font-bold text-xl md:text-2xl text-pink-700 mb-1 flex flex-col items-center gap-0">
                                                    <span>{notice.groomName}</span>
                                                    {notice.groomParents && (
                                                        <span className="text-gray-700 text-base md:text-lg font-normal mt-0.5">
                                                            S/O {notice.groomParents}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-pink-700 font-semibold text-sm md:text-base mb-2 text-center tracking-wide">
                                                    INTENDS TO CELEBRATE THE SACRAMENT OF MATRIMONY WITH
                                                </div>
                                                <div className="font-bold text-xl md:text-2xl text-pink-700 mb-1 flex flex-col items-center gap-0">
                                                    <span>{notice.brideName}</span>
                                                    {notice.brideParents && (
                                                        <span className="text-gray-700 text-base md:text-lg font-normal mt-0.5">
                                                            D/O {notice.brideParents}
                                                        </span>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                        
                                        <div className="mt-2 text-gray-600 text-sm w-full">
                                            <div className="flex items-center justify-center gap-2 mb-1">
                                                <span className="text-pink-500">📅</span>
                                                <span>{formatDate(notice.weddingDate)}</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-pink-500">📍</span>
                                                <span>{notice.venue}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-2 text-pink-600 font-bold text-base md:text-lg">
                                            {getBannText(notice.bannType)}
                                        </div>
                                        <span className="mt-4 text-3xl animate-pulse">💕</span>
                                    </article>
                                </AnimatedFadeIn>
                            );
                        })}
                    </div>
                </section>
            )}
        </section>
    );

    ;
}