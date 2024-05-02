import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    function up() {
        setCount(prevCount => prevCount + 1)
    }

    function down() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <h1 className="mainTitle">{count}</h1>
            <div className="btn">
                <button className="btnCounter" onClick={up}>click+</button>
                <button className="btnCounter" onClick={down}>click-</button>
            </div>
        </div>
    );
}

export default Counter;