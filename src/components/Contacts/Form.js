import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact} from '../../redux/contactSlice';

function Form(){
      const [name,setName] = useState('');
      const [number,setNumber] = useState('');
      const dispatch = useDispatch();

      const handleSubmit = (e) => {
            e.preventDefault();
            if(!name || !number) return false;

           // const names = name.split(',');
            //const data = names.map((name) => ({id:nanoid(),name}) )
            dispatch(addContact({id:nanoid(),name, phone_number: number}));
            setName('');
            setNumber('');
      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input value={name} placeholder="name" onChange={(e) => setName(e.target.value)}/>
                        <input value={number} placeholder="phone_number" onChange={(e) => setNumber(e.target.value)}/>
                        <div className='btn'><button type='submit'>Add</button></div>
                        
                  </form>
            </div>
      );
}

export default Form