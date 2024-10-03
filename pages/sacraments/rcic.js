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
        <div className="md:w-1/2 p-4 hidden md:block">
          <Sacraments_Links />
        </div>
        <div className="md:w-full p-4">
          <p className="text-2xl text-text1  special-text">
            The Rite for Christian Initiation for Children (RCIC) is the
            preparation process for being fully received into the Church for
            children and youth ages 7–17.
          </p>
          <h3>REQUIREMENTS</h3>
          <div></div>
          <h3>WHAT TO EXPECT?</h3>
          <div className=" flex flex-col md:flex-row md:space-x-60">
            <div>
              <h4 className=" font-semibold">PARENT/GUARDIAN INVOLVEMENT</h4>
              <h4 className=" font-semibold">LESSONS</h4>
            </div>
            <div>
              <h4 className=" font-semibold">GODPARENT</h4>
              <h4 className=" font-semibold">SACRAMENTS</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChildrenBecomingCatholic;
