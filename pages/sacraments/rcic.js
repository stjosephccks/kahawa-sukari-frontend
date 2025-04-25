import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Sacraments_Links from "@/components/Sacraments_Links";
import React from "react";

function ChildrenBecomingCatholic() {
  const title = "Becoming catholic";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "Right of Christian Initiation for Children";
  return (
    <Layout>
      <Hero text={text} title={title} imageUrl={imageurl} />
      <div className="flex flex-col md:flex-row justify-center  md:max-w-screen-lg mx-auto p-4">
        <div className="sticky top-4">
          <Sacraments_Links />
        </div>
        <div className="md:w-full p-4">
          <p className="text-2xl text-text1  special-text">
            <b>The Rite for Christian Initiation for Children (RCIC)</b> is the
            preparation process for being fully received into the Church for
            children and youth ages 7–17.
          </p>
          <h3>REQUIREMENTS</h3>
          <ul>
            <li className="passage">Complete 2 years of Faith Formation.</li>
          </ul>
          <div></div>
          <h3>WHAT TO EXPECT?</h3>
          <div className=" flex flex-col md:flex-row md:space-x-5">
            <div>
              <h4 className=" font-semibold">INTERVIEW</h4>
              <p className="passage">
                The parents of and the child seeking to become Catholic are
                required to have a conversation with a priest in charge or
                catechist regarding their desire to enter the Church. This will
                typically take place as soon as you register. It is a moment for
                the child to share their personal story and what has led to the
                decision to enter the church and/or express any questions that
                they may have.
              </p>
              <h4 className=" font-semibold">PARENT INVOLVEMENT</h4>
              <p className="passage">
                Parents are to be actively involved in their children’s
                sacrament process. This means they are expected to attend rites,
                assist with homework, and accompany their children through the
                many aspects involved in preparing for the sacraments.{" "}
              </p>

              <h4 className=" font-semibold">LESSONS</h4>
              <p className="passage">
                Children are required to attend atleast 70% of classes held
                every saturday from <b>2:30 pm to 5:00 pm,</b> They are also
                required to attend all liturgical moments prescribed for the
                children. In addition to this, the children are required to
                complete any homework distributed after they are registered.
              </p>
            </div>
            <div>
              <h4 className=" font-semibold">GODPARENT</h4>
              <p className="passage">
                Children choose a Godparent to accompany them during preparation
                and beyond. <b>The Godparent cannot be the seeker’s parent.</b>{" "}
                A Godparent must be a practicing Catholic, be 18 yrs of age or
                older, if married, be married in the Catholic Church, and fully
                initiated by having received the sacraments of Baptism,
                Confirmation, and Eucharist and be committed to helping the
                child lead a Christian life.
              </p>
              <h4 className=" font-semibold">SACRAMENTS</h4>
              <p className="passage">
                The Sacraments of Initiation are Baptism, Confirmation, and
                Eucharist. Our Catholic Initiation Program prepares individuals
                for the reception of these sacraments as well as the sacrament
                of Penance. Catholic Initiation children will enter the Church
                through the Sacraments of Baptism, and Communion during the
                Easter Vigil Mass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChildrenBecomingCatholic;
