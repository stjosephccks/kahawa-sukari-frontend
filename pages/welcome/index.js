import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function welcome() {
  const title = "Welcome to St. Joseph Catholic Church";
  const text = "A beacon of faith, education, and healthcare in our community";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Mission Statement */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are committed to nurturing the spiritual growth of our
              community through prayer, education, and service, while providing
              quality Catholic education and healthcare services that form the
              whole person - mind, body, and spirit.
            </p>
          </section>

          {/* Quick Links */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            <Link
              href="/liturgy"
              className="bg-blue-900 text-white p-6 rounded-lg text-center hover:bg-blue-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Mass Times</h3>
              <p className="text-sm">View our schedule</p>
            </Link>
            <Link
              href="#education"
              className="bg-blue-900 text-white p-6 rounded-lg text-center hover:bg-blue-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Our Schools</h3>
              <p className="text-sm">Learn about our institutions</p>
            </Link>
            <Link
              href="#hospital"
              className="bg-blue-900 text-white p-6 rounded-lg text-center hover:bg-blue-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">
                St. Joseph Hospital
              </h3>
              <p className="text-sm">Healthcare services</p>
            </Link>
            <Link
              href="#outstation"
              className="bg-blue-900 text-white p-6 rounded-lg text-center hover:bg-blue-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Outstations</h3>
              <p className="text-sm">Our community branches</p>
            </Link>
          </section>

          {/* Catholic Faith Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Catholic Faith
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Daily Mass Schedule
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Weekday Mass ( Tue - Fri)</span>
                    <span>6:30 AM & 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday and Monday </span>
                    <span>7:30 AM</span>
                  </li>

                  <li className="flex justify-between">
                    <span>Sunday Mass</span>
                    <span>7:30 AM, 9:00 AM, 10:30 AM, 12 NOON </span>
                  </li>
                  <li className="flex justify-between">
                    <span>St. Joseph Kahawa Wendani</span>
                    <span>9:30 AM (Sunday)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Catholic Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://www.vatican.va"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-2">🌐</span>
                      The Vatican - Official Website
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.usccb.org"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-2">📖</span>
                      United States Conference of Catholic Bishops
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.catholic.org"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-2">✝️</span>
                      Catholic Online
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.ewtn.com"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-2">📺</span>
                      EWTN Global Catholic Network
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Educational Institutions */}
          <div id="education"></div>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Educational Institutions
            </h2>

            {/* Kindergarten Section */}
            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-semibold mb-4">
                      Emmanuela Mazzola Kindergarten
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Our kindergarten provides a nurturing environment where
                      young children begin their educational journey with
                      Catholic values. We focus on early childhood development
                      through play-based learning and faith formation.
                    </p>
                    <ul className="mb-4 space-y-2 text-gray-600">
                      <li>• Age-appropriate faith formation</li>
                      <li>• Play-based learning environment</li>
                      <li>• Qualified and caring teachers</li>
                      <li>• Safe and secure facilities</li>
                      <li>• Nutritious meals program</li>
                      <li>• After-school care available</li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">
                        Contact Information
                      </h4>
                      <a
                        href="tel:+254797299854"
                        className="text-gray-600 flex items-center"
                      >
                        <span className="mr-2">📞</span>
                        Phone: 254 797 299 854
                      </a>

                      <a
                        href="mailto:info@emschool.ke"
                        className="text-gray-600 flex items-center"
                      >
                        <span className="mr-2">📧</span>
                        Email: info@emschool.ke
                      </a>
                      <p className="text-gray-600 flex items-center">
                        <span className="mr-2">📍</span>
                        Location: [Next to St.Joseph Catholic Church Kahawa
                        Sukari]
                      </p>
                    </div>
                    <Link
                      href="https://www.emschool.ke/"
                      target="_blank"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Learn More →
                    </Link>
                  </div>
                  <div className="h-72 bg-gray-200 rounded-lg order-1 md:order-2">
                    <Image
                      src={
                        "https://kahawa-sukari.s3.amazonaws.com/emanuela-mazzola-kindergarten.webp"
                      }
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                      alt="Emmanuel Mazzola Kindergarten"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Primary and JSS Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 rounded-lg mb-4">
                  <Image
                    src={
                      "https://kahawa-sukari.s3.amazonaws.com/urafiki-carovana.jpg"
                    }
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    alt="Emmanuel Mazzola Kindergarten"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Urafiki Carovana School
                </h3>
                <p className="mb-4 text-gray-700">
                  Our comprehensive school offers both primary and junior
                  secondary education, combining academic excellence with
                  Catholic teachings. We prepare students for success in their
                  academic and spiritual journey.
                </p>
                <ul className="mb-4 space-y-2 text-gray-600">
                  <li>• Primary and Junior Secondary Education</li>
                  <li>• Strong academic foundation</li>
                  <li>• Daily prayer and religious education</li>
                  <li>• Extracurricular activities</li>
                  <li>• Character development</li>
                  <li>• Sports and arts programs</li>
                </ul>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <a href="tel:+254 791517782" className="text-gray-600">
                    <span className="mr-2">📞</span>
                    Phone: +254 791 517 782
                  </a>
                  <br />
                  <a href="mailto:info@ucschool.ke" className="text-gray-600">
                    <span className="mr-2">📧</span>
                    Email: info@ucschool.ke
                  </a>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📍</span>
                    Location: [Wundanyi Road Kahawa Sukari]
                  </p>
                </div>
                <Link
                  href="https://ucschool.ke/"
                  target="_blank"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 rounded-lg mb-4">
                  <Image
                    src={
                      "https://kahawa-sukari.s3.amazonaws.com/St+Kizito+TVET.jpg"
                    }
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    alt="Emmanuel Mazzola Kindergarten"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  St. Kizito Vocational Training
                </h3>
                <p className="mb-4 text-gray-700">
                  Our vocational training center provides practical skills and
                  technical education to prepare students for the workforce. We
                  focus on hands-on training and professional development.
                </p>
                <ul className="mb-4 space-y-2 text-gray-600">
                  <li>• Technical skills training</li>
                  <li>• Professional certification</li>
                  <li>• Hands-on practical experience</li>
                  <li>• Industry partnerships</li>
                  <li>• Career guidance</li>
                  <li>• Job placement support</li>
                </ul>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <a href="tel: +254724253547" className="text-gray-600">
                    <span className="mr-2">📞</span>
                    Phone: +254 724 253 547
                  </a>
                  <br />
                  <a href="mailto:info@stkizito.ke" className="text-gray-600">
                    <span className="mr-2">📧</span>
                    Email: info@stkizito.ke
                  </a>
                  <p className="text-gray-600">
                    <span className="mr-2">📍</span>
                    Location: [Main Campus: Githurai 45 Mwihoko
                    <br /> Branch Campus: Roysambu Opposite TRM Drive]
                  </p>
                </div>
                <Link
                  href="https://stkizito.ke/"
                  target="_blank"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Hospital Section */}
          <section className="mb-16" id="hospital">
            <h2 className="text-3xl font-bold mb-8 text-center">
              St. Joseph Hospital
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Our Healthcare Services
                  </h3>
                  <p className="mb-4 text-gray-700">
                    St. Joseph Hospital provides comprehensive healthcare
                    services to our community, guided by Catholic values and a
                    commitment to compassionate care.
                  </p>
                  <ul className="mb-4 space-y-2 text-gray-600">
                    <li>• General medical services</li>
                    <li>• Emergency care</li>
                    <li>• Maternity services</li>
                    <li>• Pediatric care</li>
                    <li>• Laboratory services</li>
                    <li>• Pharmacy services</li>
                  </ul>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-2">📞</span>
                        <a href="tel:+254700602602" className="text-gray-600">
                          Emergency: +254 700 602 602
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📞</span>
                        <a href="tel:+254715683924" className="text-gray-600">
                          Main Line: +254 715 683 924
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📧</span>
                        <a
                          href="mailto:customercare@stjosephwendani.org"
                          className="text-gray-600"
                        >
                          <span className="mr-2">📧</span>
                          Email: customercare@ stjosephwendani.org
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span className="text-gray-600">
                          Location: [Kahawa Wendani]
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-72 bg-gray-200 rounded-lg">
                  <Image
                    src="https://kahawa-sukari.s3.amazonaws.com/stJosephhostpital.webp"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    alt="St. Joseph Hospital"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Outstations Section */}
          <section className="mb-16" id="outstaion">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Outstations
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    St. Joseph Kahawa Wendani
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Our outstation at Kahawa Wendani serves the local community
                    with regular Mass services and religious education programs.
                  </p>
                  <ul className="mb-4 space-y-2 text-gray-600">
                    <li>• Sunday Mass at 10:00 AM</li>
                    <li>• Catechism classes</li>
                    <li>• Youth programs</li>
                    <li>• Community outreach</li>
                  </ul>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📞</span>
                      Phone: +254 700 000 005
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📧</span>
                      Email: wendani@stjoseph.org
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📍</span>
                      Location: [Kahawa Wendani Address]
                    </p>
                  </div>
                </div>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking for spiritual growth, quality education,
              healthcare services, or a welcoming community, we invite you to be
              part of our Catholic family.
            </p>
            {/* <div className="space-x-4">
              <Link
                href="/register"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Register Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Schedule a Visit
              </Link>
            </div> */}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default welcome;
