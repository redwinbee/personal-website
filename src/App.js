import React from "react";
import Container from "./components/Container";
import "./App.css";
import Card from "./components/Card";

export default function App() {
    return (
        <Container>
            <Card title="Edwin Bermudes" body="This website is being written using React and TailwindCSS and is still very much a work in progress.
                    Thanks for stopping by and make sure to come back later! P.S: If you hover over the scrambled text
                    above this paragraph, you can see what it says =P">
                <a className="text-cyan-200" href="https://github.com/redwinbee">@GitHub</a>
            </Card>
        </Container>
    )
}