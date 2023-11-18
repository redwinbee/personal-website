import React from "react";
import "./App.css";
import Container from "./components/Container";
import Card from "./components/Card/Card";

export default function App() {
  return (
    <>
      <div className="space" />
      <Container>
        <Card
          title="Edwin Bermudes"
          subtitle="This website is being written using React and TailwindCSS and is still very much a work in progress. Thanks for stopping by and make sure to come back later!"
          phrases={["Edwin Bermudes", "@redwinbee"]}
        ></Card>
      </Container>
    </>
  );
}
