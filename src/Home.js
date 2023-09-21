import React from 'react'
const Home = ({items, setItems}) => {
    const empty = items.length === 0;
    function handleDelete(id){
        try{
        const URL = 'http://localhost:3500/notes/'+id;
        const deleteItem = async () => {
          await fetch(URL, {method: 'DELETE'})
          setItems(items.filter(item => (
            item.id !== id
          )))
        }
        deleteItem();
        }
        catch(err){
          console.error(err.name, err.message);
        }
    }
  return (
    <>
    <h2>Home</h2>
    {empty && <p className='empty'>List is Empty</p>}
    {!empty && 
    <ul>
    {items.map(item => (
        <li className='items' key={item.id}>
            <hr />
            <h3>{item.title}</h3>
            <p>{item.datetime}</p>
            <p>{item.content}</p>
            <button className='delete-btn' onClick={()=>{handleDelete(item.id)}}>Delete</button>
        </li>
    ))}
    </ul>
    }
    </>
  )
}

export default Home