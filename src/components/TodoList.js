import React, { Component } from 'react'
import Todoitem from './Todoitem'

export default class Todo extends Component {
    render() {
        const{items,clearList,handleDelete,handleEdit} = this.props
        return (
            <div>
                  <ul className="list-group my-5">
                      <h5 className="text-capitalize text-center">Complaint List</h5>
                      
                       {
                           items.map(item => {
                               return(
                                <Todoitem 
                                key={item.id}
                                //  id={item.id}
                                title={item.title}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit ={() => handleEdit(item.id)}
                                />
                               )
                           })
                       }

                      <button type="button" 
                      className="btn btn-danger btn-block text-capitalize"
                      onClick={clearList}
                      > clear list</button> 
                      </ul>      
            </div>
        )
    }
}
