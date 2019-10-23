import React, {Component} from 'react';
import { brotliDecompressSync } from 'zlib';
import { getPriority } from 'os';

class Todoinput extends Component {
    
    render() { 
        const{item,handleChnage,handleSubmit, editItem} = this.props
        return ( 
         <div className="card card-body my-3">

             <form onSubmit={handleSubmit}>
              <div className="input-group">
               <div className="input-group-prepend">
               <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book"></i>

               </div>
               </div>
               <input type="text" 
               className="form-control text-capitalize"
               placeholder="Complaint Description"
               value={item}
               onChange={handleChnage}
               />
              </div>
              <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} >
                  {editItem ? "edit Complaint":"Add Complaint"}</button>
             </form>
             
         </div>
         );
    }
}
 
export default Todoinput;