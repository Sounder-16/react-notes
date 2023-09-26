import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {getMonth} from './Notes';
import DataContext from './context/DataContext';
import api from './api/apiDataFetch'
const Edit = () => {
  const navigate = useNavigate();
  const {editTitle, editContent, setEditTitle, setEditContent, items, setItems, ID} = useContext(DataContext);
  function handleUpdate(e){
    e.preventDefault();
    if(editTitle.length !== 0 && editContent.length !== 0){
    const date = new Date();
    const updatedItem = {
      id : ID,
      title : editTitle,
      datetime : `${getMonth()} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} [Edited]`,
      content : editContent
    }
    const updateThings = async () => {
        try{
            await api.put('/notes/'+ID, updatedItem);
            setItems(items.map(item => (
              item.id === updatedItem.id ? updatedItem: item
            )))
        }
        catch(err){
          console.error(err.message);
        }
    }
    updateThings();
    navigate('/')
  }
  }
  return (
          <div className='item-editor'>
            <h2>Edit Notes</h2>
              <form onSubmit={(e) => {handleUpdate(e)}}>
                <label htmlFor="">Title</label>
                <input type="text" placeholder='Edit Title' id='edit-title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/><br />
                <label htmlFor="">Notes</label>
                <textarea type="text" placeholder='Edit Content' id='edit-content' value={editContent} onChange={(e) => {setEditContent(e.target.value)}}/><br />
                <button>Update</button>
              </form>
          </div>
  );
}
export default Edit;