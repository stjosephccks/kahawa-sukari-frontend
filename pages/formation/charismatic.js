import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import React from "react";

function Charismatic() {
  const title = "Charismatic Prayer Group";
  const text =
    " charismatic prayer group for individuals seeking guidance and support.";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  return (
    <Layout>
      <Hero title={title} imageUrl={imageurl} text={text} />
      <div className="flex flex-col items-center ">
        <h1>Charismatic</h1>
        bndinikn
      </div>
    </Layout>
  );
}

export default Charismatic;
