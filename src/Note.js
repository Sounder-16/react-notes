import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DataContext from './context/DataContext';
const Note = () => {
    const {id} = useParams();
    const {items, setItems, setEditTitle, setEditContent, setId} = useContext(DataContext);
    const nav = useNavigate();
    if(isNaN(id)){
      nav('*');
    }
    const note = items.find(item => (item.id.toString() === id))
    function handleDelete(){
      try{
      const URL = 'http://localhost:3500/notes/'+note.id;
      const deleteItem = async () => {
        await fetch(URL, {method: 'DELETE'})
        setItems(items.filter(item => (
          item.id !== note.id
        )))
      }
      deleteItem();
      nav('/')
      }
      catch(err){
        console.error(err.name, err.message);
      }
    }
    function handleEdit(id){
        setEditTitle(note.title)
        setEditContent(note.content)
        setId(note.id);
    }
  return (
    <div>
    {!note && <h2 className='loading'>Note is not available</h2>}
    {note &&
        <article>  
        <h2><u>Note {note.id}</u></h2>
        <h2>Title : {note.title}</h2>
        <p><strong>Content : </strong>{note.content}</p>
        <Link to='/edit'><button className='edit-btn' onClick={()=>{handleEdit(note.id)}}>Edit</button></Link>
        <button className='delete-btn' onClick={()=>{handleDelete()}}>Delete</button>
        </article>
    }
    </div>
  )
}

export default Note