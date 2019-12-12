import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeEdit, saveEdit } from '../redux/actions';
import './person.css'

const EditPerson = ({ item }) => {
    const [name, setName] = useState(item.name);
    const [work, setWork] = useState(item.work);
    const dispatch = useDispatch();
    // console.log(item)
    let obj = {
        id: item.id,
        name: name,
        work: work,
        isEditable: item.isEditable
    }
    // console.log(obj)
    return (
        <div className="edit-person">
            <h3>EDIT PERSON</h3>
            <label htmlFor="name" >New Name:</label>
            <input onChange={e => setName(e.target.value)} value={name} type="text" id="name" required />
            <label htmlFor="work" >Work:</label>
            <input onChange={e => setWork(e.target.value)} value={work} type="text" id="work" required />
            <button onClick={() => dispatch(saveEdit(obj))} className="save-btn" type="submit">SAVE</button>
            <button onClick={() => dispatch(closeEdit(item.id))} className="cancel-btn" type="submit">CANCEL</button>
        </div>
    );
};

export default EditPerson;