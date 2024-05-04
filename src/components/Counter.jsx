import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // Эмуляция запроса на сервер при изменении счетчика - пример использования хука useEffect.
    // Применяется, когда нужно выполнить побочные эффекты (в данном случае выводим в алерт надпись, но, по факту, может быть запрос на 
    // сервер при изменении состояния "count" - об этом говорит аргумент [count]).   
    // useEffect(() => {
    //     alert(`Sending request to server with count: ${count}`);
    // }, [count]);

    const up = () => setCount(prevCount => prevCount + 1);
    const down = () => setCount(prevCount => prevCount - 1);
    

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