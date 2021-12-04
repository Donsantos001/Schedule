import React, { useState } from "react";
import Counter from "./Counter";

function Counters(){
    const [counters, setCounters] = useState([
        {id: 1, start : 0},
        {id: 2, start : 4},
        {id: 3, start : 5},
        {id: 4, start : 10},
    ])

    const resetCounters = () => {
        setCounters(
            counters.map(counter => {
                counter.start = 0
                return counter
            })
        )
    }

    const handleIncrement = (id) => {
        setCounters(
            counters.map(counter => {
                counter.start = counter.id === id ? counter.start + 1 : counter.start
                return counter
            })
        )
    }

    const deleteItem = (id) => {
        setCounters(
            counters.filter(counter => counter.id !== id)
        )
    }

    return(
        <div>
            <button onClick={() => resetCounters()}>Reset</button>
            {counters.map(counter => {
                return <Counter key={counter.id} counter={counter} onIncrement={handleIncrement} onDelete={deleteItem} />
            })}
        </div>
    )
}

export default Counters;