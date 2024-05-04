import { useState } from "react";



function Todo() {

const [post, setPost] = useState('')

    return ( 
        <div>
            <input className="input" type="text" />
            <button className="btn_todo">ADD TASK</button>
        </div>
     );
}

export default Todo;