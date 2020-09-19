import React from 'react';

const ToDoListItem = (props) => {



    return (
        <>
            <div className="todo_style">
                <i class="fa fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)
                }} />
                <li>{props.item}</li>
            </div>
        </>
    )
}

export default ToDoListItem;