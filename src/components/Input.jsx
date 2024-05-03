import { useState } from "react";



function Input() {


    const [text, setText] = useState('Input anything text');

    const inp = (event) => setText(event.target.value);

    return (
        <div className="counter">
            <div className="mainTitle">{text}</div>
            <input value={text} onChange={inp} className="input" type="text" />
        </div>
    );
}

export default Input;