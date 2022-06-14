import React from 'react'
import {useParams} from 'react-router-dom'
import EditForm from './EditForm';
import  { useSelector } from 'react-redux';
import { contactsSelector } from '../../redux/contactSlice';
import { Navigate } from "react-router-dom";
function Edit() {
  const { id } = useParams();
  console.log(id);
  const contact = useSelector((state) => contactsSelector.selectById(state,id));
  if(!contact){
   return  <Navigate to="/" />
  }
  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact}/>
    </div>
  )
}

export default Edit