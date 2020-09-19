import React, { useEffect } from 'react';
import './ToDoList.css'
import { useState } from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {

    const [itemName, setItem] = useState();
    debugger;
    const obj = JSON.parse(localStorage.getItem('Items'));
    var res = [];
    for (var i in obj)
        res.push(obj[i]);

    const [Items, setItems] = useState(res);

    const ItemEvent = (event) => {
        debugger;
        setItem(event.target.value);

    }

    const AddItem = () => {
        debugger;
        if (typeof itemName != 'undefined' && itemName.length > 0) {
            setItems((existinglistItems) => {
                return [...existinglistItems, itemName];
            });

            setItem("");
            const lstItems = [...Items, itemName];
            var strList = JSON.stringify(lstItems);
            localStorage.setItem('Items', strList);
        }
        else {
            { alert('Please fill the item') };
        }

    }

    const DeleteItem = (id) => {
        //console.log('deleted');
        setItems((existinglistItems) => {
            return existinglistItems.filter((a, index) => {
                return index !== id;
            })
        });
        localStorage.clear();
        const lstItems = Items.filter((val, index) => { return index !== id });
        var strList = JSON.stringify(lstItems);
        localStorage.setItem('Items', strList);
    }

    const ClearItems = () => {
        debugger;
        let i = Items.length - 1;
        for (i in Items)
            Items.pop(Items[i]);
        localStorage.clear();
        window.location.reload(false);
        // useEffect(()=>{

        // });
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add an items" onChange={ItemEvent} value={itemName}></input>
                    <button onClick={AddItem}>+</button>
                    <button onClick={ClearItems}>ce</button>
                    <ol>
                        {Items.map((item, index) => {
                            return (<>
                                <ToDoListItem key={index} id={index} item={item} onSelect={DeleteItem} />
                            </>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default ToDoList;