import Layout from "@/components/Layout";
import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";
import SEO from "@/components/SEO";

function Jumuiya() {
  const jumuiyas = [
    {
      name: "St. Ambrose Jumuiya",
      location: "Melrose-Wendani Junior Road",
      moderator: "John Patrick Micheni",
      modContact: "+254724575639",
      secretary: "Reuben Muriuki",
      secContact: "+254721777944" ,
      description: "Following St. Ambrose's example of leadership and truth, they are a community devoted to building strong foundations of faith and courage."
    },
    {
      name: "St. Ann Jumuiya",
      location: "Kiu River Road",
      moderator: "Daniel Macharia Githiga",
      modContact: "+254725797308",
      secretary: "Nancy Mathenge",
      secContact: "+254722862254",
      description: "With St. Ann, the mother of Mary, as their patron, the Jumuiya is devoted to cherishing family values, prayer, and to nurture faith across generations."
    },
    {

      name: "St. Antony Jumuiya",
      location: "",
      moderator: "Joseph Kinyanjui",
      modContact: "+254725532309",
      secretary: "Dorothy Mutanu Maingi",
      secContact: "+254723495612",
      description: "Guided by St. Antony, known for his wisdom and compassion, they seek to be a community that helps others rediscover their faith and God's presence in daily life."
    },
    {
      name: "St.Augustine Jumuiya",
      location: "",
      moderator: "Serah",
      modContact: "+254725025748",
      secretary: "Winnie Ngugi",
      secContact: "+254725674114",
      description: "A community seeking truth and renewal, echoing the journey of the restless heart that found peace in God"
    },
    {
      name: "St. Bakhita Jumuiya",
      location: "Kwale Road",
      moderator: "Isaac Kamande",
      modContact: "+254722839521",
      secretary: "Lydia Mutua",
      secContact: "+254721870320",
      description: " A Jumuiya of hope and forgiveness, following the example of the Sudanese saint who rose from slavery to sainthood through mercy and love."
    },
    {
      name: "St. Benedict Jumuiya",
      location: "",
      moderator: "Simon Gichuki",
      modContact: "+254722813687",
      secretary: "Faith Njeru",
      secContact: "+254722793248",
      description: "A community modeled on the principles of St.Benedict of 'pray and work', building a disciplined and spiritually grounded community."
    },
    {
      name: "St. Catherine Jumuiya",
      location: "Wundanyi Road",
      moderator: "Silas Nyaga",
      modContact: "+254721319836",
      secretary: "Susan Njau",
      secContact: "+254720738008",
      description: "Rooted in prayer and action, the Jumuiya follows St. Catherine of Siena's call to serve the Church with courage, wisdom, and love."
    },
    {
      name: "St. Claire Jumuiya",
      location: "Kwa Mungara-Muchina Road",
      moderator: "Dominic Mulinge Kiendi",
      modContact: "+254720734425",
      secretary: "Joan Nasambu",
      secContact: "+254724203103",
      description: "Inspired by St. Claire's simplicity and deep devotion, the community strives to live lives of humility, prayer, and peaceful service to one another."
    },
    {
      name: "St. Charles Lwanga Jumuiya",
      location: "Isiolo Road",
      moderator: "Simon Mathenge Mwangi",
      modContact: "+254706449680",
      secretary: "Grace Njehia",
      secContact: "+254722256601",
      description: "As St. Charles Lwanga stood firm in faith amidst persecution, the Jumuiya is committed to living courageously as witnesses of Christ, especially among the youth."
    },
    {
      name: "St. Dominic Jumuiya",
      location: "",
      moderator: "Gertrude Wangari",
      modContact: "+254726901338",
      secretary: "Grace Wahito",
      secContact: "+254724171085",
      description: " A community that seeks to proclaim the Word of God boldly, inspired by St. Dominic's zeal for truth and his mission to spread the Gospel"
    },
     {
      name: "St. Francis Jumuiya",
      location: "",
      moderator: "James Njuguna",
      modContact: "+254721598074",
      secretary: "Pamela Itur",
      secContact: "+254724874079",
      description: " A community that follows the joyful path of St.Francis of Assisi, embracing peace, simplicity and love for all creation and the poor."
    },
    {
      name: "St. John Jumuiya",
      location: "Nyahururu Road",
      moderator: "Mathew Linge",
      modContact: "+254721237960",
      secretary: "Elizabeth Rukungu",
      secContact: "+254727272506",
      description: "A loving and faithful community, walking with the beloved disciple of Jesus, seeking to grow deeper in their relationship with Christ and one another."
    },
    {
      name: "St. Jude Jumuiya",
      location: "",
      moderator: "Dunstone Ulwodi",
      modContact: "+254721385598",
      secretary: "Esther Ndulu Wambua",
      secContact: "+254720545431",
      description: "A hopeful and prayerful community, drawing strength from the patron of desperate causes and forgotten souls."
    },
    {
      name: "St. Martin Jumuiya",
      location: "",
      moderator: "Joseph Kinyua Wachira",
      modContact: "+254716094086",
      secretary: "Naomi Njenga",
      secContact: "+254725380743",
      description: "A humble and compassionate community,inspired by the saint's dedication to service of the poor and sick."
    },
    {
      name: "St. Mary Jumuiya",
      location: "Baringo Road",
      moderator: "Mr. Francis Njoroge",
      modContact: "+254780606575",
      secretary: "Margaret Kiruki",
      secContact: "+254722579123",
      description: "Jumuiya walking in the footsteps of the Blessed Virgin Mary. Inspired by her faith, humility, and obedience, they strive to say 'yes' to God's will in their lives "
    },
    {
      name: "St.Michael The Archangel Jumuiya",
      location: "parish",
      moderator: "Paul Njuguna",
      modContact: "+254722240653",
      secretary: "Tume Tuka",
      secContact: "+254702303367",
      description: " A vigilant and courageous community under the protection of the warrior angel who defends the Church against evil."
    },
    {
      name: "St. Monica Jumuiya",
      location: "",
      moderator: "Alice Kaberere",
      modContact: "+254715055152",
      secretary: "Beatrice Omumbo",
      secContact: "+254721466810",
      description: "A community of persistence and prayer, inspired by the mother who never gave up on her son's conversion through faith and tears."
    },
    {
      name: "St. Paul Jumuiya",
      location: "parish",
      moderator: "Isaiah Mweteli Maithukia",
      modContact: "+254723751192",
      secretary: "Linet Bridget Musimbi",
      secContact: "+254725828399",
      description: "A community seeking to spread the Gospel with passion and perseverance wherever they go, following the Apostle of the Gentiles who turned from persecutor to tireless missionary."
    },
    {
      name: "St. Peter Jumuiya",
      location: "Marsabit Road",
      moderator: "George Ndung'u",
      modContact: "+254722389273",
      secretary: "Anne Waithaka",
      secContact: "+254722141220",
      description: "A community of leadership and forgiveness, following the first Pope who overcame weakness to lead with faith."
    },
    {
      name: "St. Rita Jumuiya",
      location: "",
      moderator: "Anthony Nzive",
      modContact: "+254722943544",
      secretary: "Catherine Gachoka",
      secContact: "+254722112727",
      description: ""
    },
    {
      name: "St. Theresa Jumuiya",
      location: "Geoffrey Luruti Road",
      moderator: "Paul Ndegwa Theuri",
      modContact: "+254722370127",
      secretary: "James Karanja Thiong'o",
      secContact: "+254723872310",
      description: "Embracing St. Theresa's 'Little Way', the community seeks to grow in humility, trust, and joy as they serve God and one another with childlike faith and great love"
    },
  ];

  return (
    <Layout>
      
      <SEO title="St.Joseph Kahawa Sukari | Jumuiyas" 
          description="St.Joseph Kahawa Sukari | Jumuiyas" 
          keywords="St.Joseph Kahawa Sukari, Jumuiyas, Mass Times, Church Events"
          url="https://stjosephchurchkahawasukari.org/community/jumuiya"
     />
      <Hero
        imageUrl="https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg"
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
                <p className="text-gray-600">
                  <span className="font-medium">contact:</span><a href ={`tel: ${jumuiya.modContact}`}>
                  {jumuiya.modContact}</a>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Secretary:</span>{" "}
                  {jumuiya.secretary}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">contact:</span><a href={`tel: ${jumuiya.secContact}`}>
                  {jumuiya.secContact}</a>
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
