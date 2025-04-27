import Link from "next/link";
import Image from "next/image";

function BulletinCard({ bulletin }) {
  return (
    <div className="max-w-sm h-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white">
      <Link href={`/welcome/bulletin/${bulletin._id}`} className="block">
        <div className="relative w-full h-64 group">
          <Image
            src={bulletin.images[0]}
            alt={bulletin.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="px-6 py-5">
          <div className="font-bold text-xl mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300">
            {bulletin.title}
          </div>
          <p className="text-gray-600 text-base line-clamp-2 mb-4">
            {bulletin.description}
          </p>
          <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <span className="font-medium">Read More</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BulletinCard;
