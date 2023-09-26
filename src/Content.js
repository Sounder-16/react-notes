import React, { useContext } from 'react'
import Home from './Home'
import Notes from './Notes'
import About from './About'
import Missing from './Missing'
import Edit from './Edit'
import Note from './Note'
import { Routes, Route} from 'react-router-dom';
import DataContext from './context/DataContext'
const Content = () => {
    const {items, searchItem} = useContext(DataContext)
  return (
    <div className="App-content">
        <Routes>
            <Route path='/' element={<Home items={items.filter(item => (
                item.title.toLowerCase().includes(searchItem.toLowerCase())
            ))}/>}/>
            <Route path='/notes' element={<Notes />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/edit' element={<Edit />} />
            <Route path='/:id' element={<Note />} />
            <Route path='/*' element={<Missing />} />
        </Routes>
    </div>
  )
}
export default Content;