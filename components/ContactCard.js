import Link from "next/link";
import React from "react";

function ContactCard({ chaplain, chapTel, moderator, modTel }) {
  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-lg">
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Contact Information
      </h3>
      <div className="space-y-2 text-blue-800">
        <p>
          <strong>{chaplain}</strong>
          <br />
          <Link href={`tel:${chapTel}`} className="hover:text-blue-600">
            {chapTel}
          </Link>
        </p>
        <p>
          <strong>{moderator}</strong>
          <br />
          <Link href={`tel:${modTel}`} className="hover:text-blue-600">
            {modTel}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
