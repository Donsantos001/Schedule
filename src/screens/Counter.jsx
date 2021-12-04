import React from "react";


function Counter(props) {
    // const [todos, setTodos] = useState([
    //     {id: 1, tag: "tag1"},
    //     {id: 2, tag: "tag1"},
    //     {id: 3, tag: "tag1"},
    //     {id: 4, tag: "tag1"},
    //     {id: 5, tag: "tag1"}]);
    // const [count, setCount] = useState(props.start || 0);
    // setCount(props.start)

    // const handleIncrement = () => {
    //     setTodos(prev => [...prev, {id: count+1, tag: "New Data"}])
    //     setCount(count + 1)
    // };

    // const renderTagList = () => {
    //     return(
    //         <ul>
    //             {todos.map(todo => {
    //                 return <li key={todo.id}>{todo.tag}</li>
    //             })}
    //         </ul>
    //     )
    // }

    return ( 
        <div>
            <span>{props.counter.start}</span>
            <button onClick={ () => props.onIncrement(props.counter.id) }>Increment</button>
            <button onClick={() => props.onDelete(props.counter.id) }>Delete</button>
            {/* { renderTagList() } */}
        </div>
     );
}

export default Counter;