import React from 'react'
import { useSelector } from 'react-redux'
import { contactsSelector } from '../../redux/contactSlice';
import Item from './Item';


function List() {
      
      const contacts = useSelector(contactsSelector.selectAll)
      console.log(contacts);
  return (
    <div>
      {contacts.map((contact) => (<Item key={contact.id} item={contact}/>))}
    </div>
  )
}

export default List