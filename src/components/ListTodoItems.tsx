import { useState } from "react"
import Items from "../mockdata/Items"
import SweetAlert from 'react-bootstrap-sweetalert';

export function ListTodoItems() {
    const [items] = useState(Items)
    let arrayLevel = [];
    if (Items.length > 0) {
        for (let i = 0; i < Items.length; i++) {
            if (arrayLevel.indexOf(Items[i].level) === -1) {
                arrayLevel.push(Items[i].level);
            }
        }
    }
    arrayLevel.sort(function (a, b) { return a - b });

    const [showAlert,setShowAlert] = useState(false)
    const [indexEdit,setIndexEdit] = useState('')
    const [idEdit,setIdEdit] = useState('')
    const [nameEdit,setNameEdit] = useState('')
    const [levelEdit,setLevelEdit] = useState(0)

    function handleDeleteItem(): any {
        throw new Error("Function not implemented.");
    }

    // this.state = {
    //     items: Items,
    //     showAlert: false,

    //     indexEdit: 0,
    //     idEdit: '',
    //     nameEdit: '',
    //     levelEdit: 0,

    //     arrayLevel: arrayLevel
    // }
    return (
        <div className="panel panel-success">
            <button onClick={()=>setShowAlert(true)}>Alert</button>
            <SweetAlert
                show={showAlert}
                title="Delete Item"
                // onOutsideClick={() => this.setState({ showAlert: false })}
                // onEscapeKey={() => this.setState({ showAlert: false })}
                // onCancel={() => this.setState({ showAlert: false })}
                 onConfirm={() => handleDeleteItem()}
            />
            <div className="panel-heading">List Item</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }} className="text-center">#</th>
                        <th>Name</th>
                        <th style={{ width: '15%' }} className="text-center">Level</th>
                        <th style={{ width: '15%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}