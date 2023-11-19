import React from "react";
import "./App.css";
import Container from "./components/Container";
import Card from "./components/Card/Card";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <div className="space" />
      <Container>
        <Layout>
          <div className="col-span-3 row-span-3 col-start-2 row-start-2">
            <Card
              title="Edwin Bermudes"
              subtitle="This website is being written using React and TailwindCSS and is still very much a work in progress. Thanks for stopping by and make sure to come back later!"
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
