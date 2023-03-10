import React,{Component} from "react";
export function FormTodo(){
    return(
        <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Item Name" />
                </div>
                <div className="form-group">
                    <select title="Item" className="form-control">
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-default">Cancel</button>
            </form>
    )
}