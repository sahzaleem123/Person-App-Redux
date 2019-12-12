import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './person.css'
import { addPerson, addPersonEditOff } from '../redux/actions';
const AddPerson = () => {
    const [name, setName] = useState("");
    const [work, setWork] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        let newPerson = {
            name,
            work,
            id: Date.now()
        }
        console.log(newPerson)
        dispatch(addPerson(newPerson))
        dispatch(addPersonEditOff())
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="add-person">
                <h3>ADD PERSON</h3>
                <label htmlFor="name" >Your Name:</label>
                <input onChange={e => setName(e.target.value)} value={name} type="text" id="name" required />
                <label htmlFor="work" >Work:</label>
                <input onChange={e => setWork(e.target.value)} value={work} type="text" id="work" required />
                <button className="add_submit" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddPerson;