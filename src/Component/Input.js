import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const {input,handleChange,handleAddItem}=this.props
        return (
            <form className="form">
                <input id="inputItem" 
                       type="text"
                       placeholder="Enter new task"
                       value={input}
                       onChange={handleChange}/>
                <button type="button" className="btn-add" onClick={handleAddItem}>Add</button>
              </form>
        )
    }
}
