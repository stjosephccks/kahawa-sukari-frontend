import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import Head from "next/head";
import ContactCard from "@/components/ContactCard";
import React from "react";

function Pmc() {
  const title = "PMC";
  const text =
    "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these. —Matthew 19:14";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/pmc_1.jpeg";
  const chaplain = "Fr. Mimmo - Spiritual Director";
  // const chapTel = "0759441744";
  const moderator = "PMC Moderator - Lorna Karumba";
  // const modTel = "0724 052152";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Pontifical Missionary Childhood</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Pontifical Missionary Childhood"
          key="title"
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-4">
                <Formations_Links />
              </div>
            </div>

            <div className="lg:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <div className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      About PMC
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Pontifical Missionary Childhood (PMC) was founded in
                      1843 by Bishop Charles de Forbin Hanson in France. Our
                      motto is "Children Helping Children" - we are little
                      flowers of Jesus, helping other children, especially the
                      less fortunate. PMC's role in the Church is to save
                      children's lives from death and misery, to give others
                      hope in God and in life, and prepare them to be apostles
                      to their fellow children.
                    </p>
                    <p className="text-lg text-gray-600">
                      PMC welcomes children within the age bracket of 0-14
                      years. As Jesus said, "let the little children come to me"
                      - and so we follow Him courageously and joyfully. Jesus
                      becomes our intimate friend in various ways, especially
                      through the Rosary prayer, for He says, "where two or
                      three are gathered I am in their midst."
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Duties
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>
                        <strong>Prayer</strong> - We pray for each and every
                        child, reciting daily the Hail Mary, Our Father, and
                        Glory be
                      </li>
                      <li>
                        <strong>Offering</strong> - We make offerings to God and
                        pray for children who are suffering
                      </li>
                      <li>To develop children's talents in music and prayer</li>
                      <li>To visit and support sick children</li>
                      <li>
                        To participate in annual PMC Mass with our Cardinal
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Activities & Schedule
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Regular Activities
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Sunday Rosary Recitation at 9:00 AM</li>
                        <li>Gospel Reading Discussion</li>
                        <li>Choir Practice at 9:00 AM</li>
                        <li>PMC Mass Attendance at 10:30 AM-Sunday</li>
                        <li>Visiting Sick Children</li>
                        <li>Annual PMC Mass with Cardinal</li>
                        <li>PMC Festivals</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Testimonial
                      </h3>
                      <blockquote className="italic text-gray-600">
                        "I joined PMC when I was eight years old and at that
                        time, I did not know how to recite the Holy Rosary, but
                        as time passed, I became an expert. We are taught how to
                        recite the Holy Rosary and other important moral values
                        such as respect, patience, helping the needy, visiting
                        the sick, and visiting the orphans. Through PMC, I have
                        met other children and helped others. I am now the
                        conductor of the Church PMC choir. PMC is the best thing
                        that can happen to a child like me."
                        <footer className="text-right mt-2 font-semibold">
                          - Rita Mugambi
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ministries
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Liturgical Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Children's Choir</li>
                        <li>Liturgical Dancers</li>
                        <li>Altar Servers</li>
                        <li>Lectors</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Catechism Classes</li>
                        <li>Bible Study</li>
                        <li>PMC Formation Classes and Activities</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Charity Work</li>
                        <li>Community Service</li>
                        <li>Parish Support</li>
                        <li>Missionary Activities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Special Programs
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Children's Choir
                      </h3>
                      <p className="text-gray-600">
                        Our children's choir provides musical training and
                        performance opportunities during special Masses and
                        events. Children learn hymns, liturgical music, and
                        develop their musical talents.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Liturgical Dance
                      </h3>
                      <p className="text-gray-600">
                        The liturgical dance group helps children express their
                        faith through movement. They perform during special
                        Masses and parish events, bringing joy and beauty to our
                        worship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Transition to Mantle of St. Joseph
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      As children grow and complete their confirmation, they
                      transition to the Mantle of St. Joseph group. This natural
                      progression allows them to continue their faith journey
                      with more advanced formation and service opportunities.
                    </p>
                  </div>
                </div>

                <ContactCard
                  chaplain={chaplain}
                  // chapTel={chapTel}
                  moderator={moderator}
                // modTel={modTel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pmc;
