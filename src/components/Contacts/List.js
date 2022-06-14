import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { contactsSelector,removeAllContacts } from '../../redux/contactSlice';
import Item from './Item';


function List() {
      const dispatch = useDispatch();
      const contacts = useSelector(contactsSelector.selectAll);
      const total = useSelector(contactsSelector.selectTotal);
      const handleDeleteAll = () =>{
        if(window.confirm("are you sure?")){
          dispatch(removeAllContacts());
        }
      }
      console.log(contacts);
  return (
    <div>
      { total > 0 && <div className='deleteAllBtn' onClick={handleDeleteAll}>Delete All</div>}
      
    <ul className='list'>
      {contacts.map((contact) => (<Item key={contact.id} item={contact}/>))}
    </ul>
    </div>
  )
}

export default List