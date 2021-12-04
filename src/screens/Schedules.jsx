import React, { Component, useState } from 'react'

import Schedule from '../screens/Schedule'
import '../css/schedules.css'

const Schedules = () => {
    // States
    const [todos, setTodos] = useState([
        {id: 1, title: "My Todo", description: "A short description",
         date: "20-12-21", time: "01:03", active: true},
        {id: 2, title: "My Todo", description: "A short description",
         date: "20-12-21", time: "01:03", active: true},
        {id: 3, title: "My Todo", description: "A short description",
         date: "20-12-21", time: "01:03", active: false}
    ])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [active, setActive] = useState(true)



    // Functions
    const deleteSchedule = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const activeChange = (id) => {
        setTodos(todos.map(todo => {
            todo.active = (todo.id === id ? !todo.active : todo.active)
            return todo
        }))
    }

    const addSchedule = () => {
        if(title === "" || description === "" || date === "" || time === ""){
            alert("Please fill all inputs")
            return
        }

        const newTodo = {
            id: todos.length + 1,
            title: title,
            description: description,
            date: date,
            time: time,
            active: active,
        }
        setTodos(oldTodos => [...oldTodos, newTodo])
        setTitle("")
        setDescription("")
        setDate("")
        setTime("")
        setActive(true)
    }

    return ( 
        <div>
            <div className="inputs-con">
                <div><input value={title} onInput={(evt) => setTitle(evt.target.value)} className="inputs" type="text" placeholder="title"/></div>
                <div><input value={description} onInput={(evt) => setDescription(evt.target.value)} className="inputs" type="text" placeholder="description"/></div>
                <div>
                    <input value={date} onInput={(evt) => {setDate(evt.target.value)}} className="datetime" type="date"/>
                    <input value={time} onInput={(evt) => {setTime(evt.target.value)}} className="datetime" type="time"/>
                </div>
                <div>Active ? <input defaultChecked onInput={(evt) => setActive(evt.target.checked)} type="checkbox" /></div>
                <div><button onClick={() => addSchedule()}>Add</button></div>
            </div>

            <div>
                <p style={{ color: "snow" }}>Double tap item to change status</p>
            </div>

            <div className="schedule-con">
                {todos.length === 0 && (<div style={{ color: "snow", }}>
                    <p>No schecdule available</p>
                </div>)}
                {todos.map((todo, index) => {
                    return <Schedule key={ index } todo={todo} onDelete={deleteSchedule} onActiveChange={activeChange} />
                })}
            </div>
        </div>
     );
}
 
export default Schedules;