import Layout from "@/components/Layout";
import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";

function Jumuiya() {
  const jumuiyas = [
    {
      name: "St. Ann Jumuiya",
      location: "Kiu River Road",
      moderator: "",
      description: "With St. Ann, the mother of Mary, as their patron, the Jumuiya is devoted to cherishing family values, prayer, and to nurture faith across generations."
    },
    {
      name: "St. Bakhita Jumuiya",
      location: "Kwale Road",
      moderator: "",
      description: " A Jumuiya of hope and forgiveness, following the example of the Sudanese saint who rose from slavery to sainthood through mercy and love."
    },
    {
      name: "St. Benedict Jumuiya",
      location: "",
      moderator: "",
      description: "A community modeled on the principles of St.Benedict of 'pray and work', building a disciplined and spiritually grounded community."
    },
    {
      name: "St. Catherine Jumuiya",
      location: "Wundanyi Road",
      moderator: "",
      description: "Rooted in prayer and action, the Jumuiya follows St. Catherine of Siena's call to serve the Church with courage, wisdom, and love."
    },
    {
      name: "St. Charles Lwanga Jumuiya",
      location: "Isiolo Road",
      moderator: "",
      description: "As St. Charles Lwanga stood firm in faith amidst persecution, the Jumuiya is committed to living courageously as witnesses of Christ, especially among the youth."
    },
    {
      name: "St. John Jumuiya",
      location: "Nyahururu Road",
      moderator: "",
      description: "A loving and faithful community, walking with the beloved disciple of Jesus, seeking to grow deeper in their relationship with Christ and one another."
    },
    {
      name: "St. Peter Jumuiya",
      location: "Marsabit Road",
      moderator: "",
      description: "A community of leadership and forgiveness, following the first Pope who overcame weakness to lead with faith."
    },
    {
      name: "St. Theresa Jumuiya",
      location: "Geoffrey Luruti Road",
      moderator: "Mr. Paul Ndegwa",
      description: "Embracing St. Theresa's 'Little Way', the community seeks to grow in humility, trust, and joy as they serve God and one another with childlike faith and great love"
    },
    {
      name: "St. Mary Jumuiya",
      location: "Baringo Road",
      moderator: "Mr. Francis Njoroge",
      description: "Jumuiya walking in the footsteps of the Blessed Virgin Mary. Inspired by her faith, humility, and obedience, they strive to say 'yes' to God's will in their lives "
    },
    {
      name: "St. Martin Jumuiya",
      location: "",
      moderator: "",
      description: "A humble and compassionate community,inspired by the saint's dedication to service of the poor and sick."
    },
    {
      name: "St. Dominic Jumuiya",
      location: "",
      moderator: "",
      description: " A community that seeks to proclaim the Word of God boldly, inspired by St. Dominic's zeal for truth and his mission to spread the Gospel"
    },
    {
      name: "St. Francis Jumuiya",
      location: "",
      moderator: "",
      description: " A community that follows the joyful path of St.Francis of Assisi, embracing peace, simplicity and love for all creation and the poor."
    },
    {
      name: "St. Claire Jumuiya",
      location: "Kwa Mungara-Muchina Road",
      moderator: "",
      description: "Inspired by St. Claire's simplicity and deep devotion, the community strives to live lives of humility, prayer, and peaceful service to one another."
    },
    {
      name: "St. Ambrose Jumuiya",
      location: "Melrose-Wendani Junior Road",
      moderator: "",
      description: "Following St. Ambrose's example of leadership and truth, they are a community devoted to building strong foundations of faith and courage."
    },
    {
      name: "St. Jude Jumuiya",
      location: "",
      moderator: "",
      description: "A hopeful and prayerful community, drawing strength from the patron of desperate causes and forgotten souls."
    },
    {

      name: "St. Antony Jumuiya",
      location: "",
      moderator: "",
      description: "Guided by St. Antony, known for his wisdom and compassion, they seek to be a community that helps others rediscover their faith and God's presence in daily life."
    },
    {
      name: "St. Monica Jumuiya",
      location: "",
      moderator: "",
      description: "A community of persistence and prayer, inspired by the mother who never gave up on her son's conversion through faith and tears."
    },
    {
      name: "St.Augustine Jumuiya",
      location: "",
      moderator: "",
      description: "A community seeking truth and renewal, echoing the journey of the restless heart that found peace in God"
    },
    {
      name: "St. Paul Jumuiya",
      location: "parish",
      moderator: "",
      description: "A community seeking to spread the Gospel with passion and perseverance wherever they go, following the Apostle of the Gentiles who turned from persecutor to tireless missionary."
    },
    {
      name: "St.Michael The Archangel Jumuiya",
      location: "parish",
      moderator: "",
      description: " A vigilant and courageous community under the protection of the warrior angel who defends the Church against evil."
    },
  ];

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Jumuiyas</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Jumuiyas"
          key="title"
        />
      </Head>
      <Hero
        imageUrl="https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg"
        title="Our Jumuiyas - Small Christian Communities"
        text="Join our vibrant small Christian communities where faith comes alive through prayer, service, and fellowship."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Discover Your Spiritual Home
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Jumuiyas are more than just meeting groups - they are families
            of faith where members support each other in their spiritual journey
            and serve the community together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jumuiyas.map((jumuiya, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4 text-primary">
                {jumuiya.name}
              </h2>
              <p className="text-gray-600 mb-4">{jumuiya.description}</p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span>{" "}
                  {jumuiya.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Moderator:</span>{" "}
                  {jumuiya.moderator}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Jumuiya;
