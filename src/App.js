import React from "react";
import "./App.css";
import Container from "./components/Container";
import Card from "./components/Card/Card";
import Layout from "./components/Layout";
import moment from "moment";

export default function App() {
  function getPersonalDescription() {
    let currAge = moment("19970702", "YYYYMMDD").fromNow().substring(0, 2);
    return `Hello, I am a beginner Software Engineer currently in the process of obtaining my B.S in Computer Science.
      I am currently ${currAge} years old, and while a lot of my training is in application programming, I am also
      very interested in systems programming. In my spare time you can find me either playing Overwatch or doing school
      work =)`;
  }

  return (
    <>
      <div className="space" />
      <Container>
        <Layout>
          <div className="col-span-3 row-span-3 col-start-2 row-start-2">
            <Card
              title="Edwin Bermudes"
              subtitle={getPersonalDescription()}
              phrases={["Edwin Bermudes", "@redwinbee"]}
            >
              <a href="https://github.com/redwinbee" className="text-cyan-300">
                @GitHub
              </a>
            </Card>
          </div>
        </Layout>
      </Container>
    </>
  );
}
