import React, { Component, useState } from 'react';

import '../css/schedule.css'

const Schedule = (props) => {
    const { id, title, description, date, time, active} = props.todo
    const onDelete = props.onDelete
    const onActiveChange = props.onActiveChange

    let schedule = "schedule" + (active ? " active-schedule" : "")

    return ( 
        <div className={schedule} onDoubleClick={() => onActiveChange(id)}>
            <p><strong>{title}</strong></p>
            <p>{description}</p>
            <p><span> {date} </span> <span> {time} </span> </p>
            <span className="delete-schedule" onClick={() => onDelete(id)}>x</span>
        </div>
     );

    
}
 
export default Schedule;