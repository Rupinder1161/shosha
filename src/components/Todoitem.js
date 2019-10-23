import React, { Component } from 'react'

export default class Todoitem extends Component {
    render() {
        const {title,id,handleDelete,handleEdit} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todoicon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen">edit</i>
                        
                    </span>
                    <span className="mx-2 text-capitalize text-danger" onClick={handleDelete}>
                        <i className="text-capitalize">del</i>     
                    </span>
                </div>
            </li>
        )
    }
}
