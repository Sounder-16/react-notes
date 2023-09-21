import React from 'react'
import { useNavigate } from 'react-router-dom'
const Notes = ({items, setItems}) => {
    const navigate = useNavigate();
    function getMonth(){
        switch((new Date().getMonth())%12+1){
            case 1: return "Jan"
            case 2: return "Feb"
            case 3: return "Mar"
            case 4: return "Apr"
            case 5: return "May"
            case 6: return "Jun"
            case 7: return "Jul"
            case 8: return "Aug"
            case 9: return "Sep"
            case 10: return "Oct"
            case 11: return "Nov"
            case 12: return "Dec"
            default:
        }
    }
    const date = new Date();
    const dateTime = `${getMonth()} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    function handleClick(){
        const note = {
            id : items.length!==0?items[items.length-1].id+1:1,
            datetime: dateTime,
            title: document.getElementById('title').value.trim(),
            content : document.getElementById('contents').value.trim()
        }
        const postData = async () =>{
            try{
                const URL = 'http://localhost:3500/notes';
                await fetch(URL, {
                    method: 'POST',
                    headers: {"Content-Type":"application/json" },
                    body: JSON.stringify(note)
                })
                setItems([...items, note])
            }
            catch(err){
                console.error(err.name, err.message);
            }
        }
        postData();
        navigate('/')
    }
  return (
    <div className='item-adder'>
    <h2>Notes</h2>
    <form onSubmit={e => {e.preventDefault()}}>
    <label htmlFor="title">Enter Title</label>
    <input type="text" placeholder='Enter Title' id='title'/><br />
    <label htmlFor="contents">Enter Content</label>
    <input type="text" placeholder='Enter Content' id='contents'/><br />
    <button onClick={()=> {handleClick()}}>Add Notes</button>
    </form>
    </div>
  )
}

export default Notes