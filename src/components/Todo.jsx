import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4} from "react-uuid"


function Todo() {

const [item, setItem] = useState('')

// Данный useState отвечает за список записей Todo (то есть за отдельные item-ы). Первоначально берётся из localStorage
// и парсится в список, для наглядного отображения в браузере. Если в localStorage ничего нет, то отображается пустой массив.
// Метод .getItem является стандартным методом localStorage, позволяющим получить значения, , сохраненного по определенному ключу в 
// локальном хранилище браузера.
const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('item')) || []
)

// Данный useEffect работает при изменении items (разумеется, и при первом ререндинге) и преобразует список items в 
// JSON формат для записи в localStorage)
useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
}, [items])

    return ( 
        <div>
            {/* Объясню суть этого обработчика событий: onChange={(e) => setItem(e.target.value)}
            onChange указывает на отслеживание изменения в поле input-а. Если мы посмотрим на событие в колбэке "e",
            то у него есть метод target, указывающий на содержимое этого поля, и метод value, который указывает 
            непосредственно на само значение в этом поле. Таким образом мы добиваемся изменения item-а */}
            <input className="input" type="text" placeholder="Enter task"
            onChange={(e) => setItem(e.target.value)}/>
            <button className="btn_todo">ADD TASK</button>
        </div>
     );
}

export default Todo;