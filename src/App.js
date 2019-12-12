import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addPersonEdit,delPerson } from './redux/actions';
import AddPerson from './person/AddPerson'
import EditPerson from './person/EditPerson';
import { editPerson } from './redux/actions';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  const persons = useSelector(state => state.persons)
  const editable = useSelector(state => state.editable)
  // console.log(editable)
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div className='container'>
        <div className='head'>
          {!editable ? <button onClick={() => dispatch(addPersonEdit())} className='btn-add'>ADD WORKER</button> : <AddPerson />}
          <h1>Workers</h1>
        </div>
        {persons.map(e => (!e.isEditable) ?
          (<div key={e.id} className='person'>
            <div className='left'>
              <h2 className="name">{e.name}</h2>
              <h3 className="work">{e.work}</h3>
            </div>
            <div className='right'>
              <button className='btn-edit' onClick={() => dispatch(editPerson(e.id))}>Edit</button>
              <button className='btn-del' onClick={()=>dispatch(delPerson(e.id))}>Delete</button>
            </div>
          </div>) :
          <EditPerson key={e.id} item={e} />
        )}
      </div>
    </div>
  );
}

export default App;
