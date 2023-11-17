import React, {useState} from "react";
import "./App.css";

function App() {
    let [value, setValue] = useState(0)

    function handleClick() {
        setValue(value + 1)
    }

    return (
        <div className="app">
            <h1>Edwin Bermudes</h1>
            <p>This is a placeholder while the site is being constructed</p>
            <p>Come back another time =)</p>
            <p>value = {value}</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default App;