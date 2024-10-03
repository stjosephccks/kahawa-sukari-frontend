import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

function YoungCatholicAdults() {
  const title = "St. Joseph Young Catholic Adults";
  const text =
    " “Dear young people, do not be satisfied with anything less than Truth and Love; do not be content with anything less than Christ. —Pope Benedict XVI” ";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  return (
    <Layout>
      <Hero title={title} imageUrl={imageurl} text={text} />
      <div className="flex flex-col items-center lg:mx-72 mx-2 ">
        <p className=" special-text md:text-3xl mt-3">
          <span className=" text-5xl text-primary font-extrabold float-left">
            Y
          </span>
          oung Catholic Adults,(YCA) Is the last pastoral structure dedicated to
          the youth in the Archdiocese,previously known as Young Adults Catholic
          Association(YACA).These are the youths who are aged from 27- 35yrs.It
          also includes those young people who are below 27 yrs but maried or
          with children.
        </p>
        <br />
        <p className=" md:text-3xl special-text">
          Y.C.A, unlike other youth groups, are rather independent because it is
          asumed that they are adults and capable of self-management.
          However,they are under the guidance of the youth chaplain in the
          Archdiocese, deanery and parish level.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:w-1/2 space-y-8">
            <h4 className="font-semibold">ACTIVITIES</h4>
            <ul>
              <li>Parish programs</li>
              <li>Formation Classes</li>
              <li>Hikes</li>
              <li>Team Building</li>
            </ul>
            <h4 className="font-semibold">MEETINGS</h4>
            <ul>
              <li>
                <strong>1st Sunday of the Month at 1:45pm</strong> - Spiritual
                Sunday
              </li>
              <li>
                <strong>3rd Sunday of the Month at 1:45 pm</strong>- Free
                Meeting
              </li>
              <li>
                <strong>
                  Tuesdays preeceeding the 1st and the 3rd Sundays of the month
                </strong>{" "}
                - Free Meeting
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2  space-y-8">
            <h4 className="font-semibold md:mt-0 mt-5">OBJECTIVES</h4>
            <h4 className="font-semibold">CHARITY</h4>
            <p>
              The group has a charitable activity every{" "}
              <strong>4th Sunday of the month,</strong> where they visit{" "}
              <strong>Nyumba Ya Wazee - kasarani</strong>
            </p>
            <h4 className="font-semibold">CONTACTS</h4>

            <p>
              Fr. Guliano - Chaplain - &nbsp;
              <Link href="tel:0737032180" className="text-primary">
                0737032180
              </Link>
              <br />
              Vincent Kirima - Moderator -&nbsp;
              <Link href="tel:0723721678" className="text-primary">
                0723721678
              </Link>
            </p>
          </div>
        </div>
        <div> Gallery</div>
      </div>{" "}
    </Layout>
  );
}

export default YoungCatholicAdults;
