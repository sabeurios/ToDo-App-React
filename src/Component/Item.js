import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const{elt,index,handleCompleteOrUndo,handleDelete}=this.props
        return (
                <div className="list-items">
                    <button className="btn" 
                            onClick={()=>handleCompleteOrUndo(index)}>
                            {!(elt.isCompleted)?"Complete":"Undo"}
                    </button>
                    <button className="btn" 
                            onClick={()=>handleDelete(index)}>
                    Delete</button> 
                    <h4 style={{textDecoration:(elt.isCompleted)&&"line-through"}}>{elt.text}</h4>    
                </div>
        )
    }
}
