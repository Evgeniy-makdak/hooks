import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { v4 as uuid4 } from "uuid"


function Todo() {

    const [item, setItem] = useState('')

    // Данный useState отвечает за список записей Todo (то есть за отдельные item-ы). Первоначально берётся из localStorage
    // и парсится в список, для наглядного отображения в браузере. Если в localStorage ничего нет, то отображается пустой массив.
    // Метод .getItem является стандартным методом localStorage, позволяющим получить значения, , сохраненного по определенному ключу в 
    // локальном хранилище браузера.
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    // Данный useEffect работает при изменении items (разумеется, и при первом ререндинге) и преобразует список items в 
    // JSON формат для записи в localStorage)
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: uuid4(),
                item: item,
                color: 'orange',
                defaultPost: {
                    x: 300,
                    y: -100
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        }
        else {
            alert('Enter task')
            setItem('')
        }
    }

    const deleteNode = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const updatePos = (data, index) => {
        let newArray = [...items]
        newArray[index].defaultPost = { x: data.x, y: data.y }
        setItems(newArray)
    }

    const keyPress = (e) => {
        const code = e.keyCode || e.which
        if (code === 13) {
            newItem()
        }
    }

    return (
        <div>
            {/* Объясню суть этого обработчика событий: onChange={(e) => setItem(e.target.value)}
            onChange указывает на отслеживание изменения в поле input-а. Если мы посмотрим на событие в колбэке "e",
            то у него есть метод target, указывающий на содержимое этого поля, и метод value, который указывает 
            непосредственно на само значение в этом поле. Таким образом мы добиваемся изменения item-а */}
            <input className="input" type="text" placeholder="Enter task" value={item}
                onChange={(e) => setItem(e.target.value)}
                onKeyPress={(e) => keyPress(e)} />
            <button className="btn_todo" onClick={newItem}>ADD TASK</button>
            {items.map((item, index) => {
                return (
                    <Draggable
                        key={index}
                        defaultPosition={item.defaultPost}
                        onStop={(_, data) => {
                            updatePos(data, index)
                        }}
                    >

                        <div className="todo_item" style={{ backgroundColor: item.color }}>
                            {`${item.item}`}
                            <button className="delete"
                                onClick={() => deleteNode(item.id)}
                            >X</button>
                        </div>

                    </Draggable>
                )
            })}
        </div>
    );
}

export default Todo;