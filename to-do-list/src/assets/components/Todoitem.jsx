import React from "react";
import './todo.css'
class TodoItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        let {e, index, updateItem, deleteItem} = this.props;
        return(
            <>
                <div key={index}>
                    <input id="deletebutton" type="text"
                    onChange={(e)=>{
                        updateItem(e.target.value)
                    }}
                     value={e}/>
                   
                   <button id="DELETEBUTTON" onClick={() => {
                    deleteItem(index)
                }}>DELETE ITEM</button>
                </div>

            </>
        )
    }
}

export default TodoItem;

