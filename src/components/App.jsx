import React from "react";

function App() {
    let count = 0;
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={() => {
                count++;
            }}>+</button>
        </div>
    );
}

export default App;
