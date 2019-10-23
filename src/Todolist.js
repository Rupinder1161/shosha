import React from 'react';
import Todoinput from './components/Todoinput'
import Todo from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid'





class Todolist extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          items:[],
          id:uuid(),
          item:'',
          editItem:false
         }
     this.handleChnage = this.handleChnage.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.clearList = this.clearList.bind(this)
     this.handleDelete = this.handleDelete.bind(this)
     this.handleEdit= this.handleEdit.bind(this)
    }
 
   handleChnage(e){
     this.setState({
           item:e.target.value
     })
   }
   handleSubmit(e){
     e.preventDefault();

     const newItem ={
       id:this.state.id,
       title:this.state.item
     }
    
// console.log(newItem)
    const updatedItems = [...this.state.items,newItem]

    this.setState({
       items:updatedItems,
       item:'',
       id:uuid(),
       editItem:false

    })
   }

   clearList(){
    this.setState({
      items:[],
      item:''
    })
  }
  handleDelete(id){
    const filter = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filter
    })
  }

  handleEdit = id => {
    const filter = this.state.items.filter(item => item.id !== id)

    const selected = this.state.items.find(item => item.id == id)
    console.log(selected)
    this.setState({
      id:id,
      items:filter,
      item:selected,
      editItem:true
    })
  }
render(){


    return(       
        <div className="container">
            <div className="row">
               <div className="col-10 mx-auto col-md-8 mt-4">
                 <h3 className="text-capitalize text-center ">Porirua Complain list</h3>
               <Todoinput 
               item ={this.state.item0}
                handleChnage={this.handleChnage}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}/>
                <Todo
                 items={this.state.items} 
                 clearList={this.clearList}
                 handleDelete={this.handleDelete}
                 handleEdit={this.handleEdit}
                 />
              </div>
            </div>
        </div>
    )
}
}
export default Todolist;