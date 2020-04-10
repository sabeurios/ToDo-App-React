import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    render() {
        const{items,handleCompleteOrUndo,handleDelete}=this.props
        return (
            <div>
                {
                    items.map((elt,index)=>{
                                        return( <Item   elt={elt} 
                                                        index={index}
                                                        handleCompleteOrUndo={handleCompleteOrUndo}
                                                        handleDelete={handleDelete} />)
                            })
                }
            </div>
        )
    }
}
