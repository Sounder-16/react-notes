import React from 'react'
import Home from './Home'
import Notes from './Notes'
import About from './About'
import Missing from './Missing'
import {Link, Routes, Route} from 'react-router-dom';
const Content = ({setSearchItem, items, setItems}) => {
  return (
    <>
    <div className="searchtool">
            <form>
                <label htmlFor="searchbox">Search Item</label>
                <input type="text" id='searchbox' role='searchbox' placeholder='Search Title' onChange={e => {setSearchItem(e.target.value)}}/>
            </form>
            <nav className='App-navbar'>
                <Link to='/'>HOME</Link>
                <Link to='/notes'>NOTES</Link>
                <Link to='/about'>ABOUT</Link>
            </nav>
        </div>
        <div className="App-content">
        <Routes>
            <Route path='/' element={<Home 
                                        items={items} 
                                        setItems={setItems} />}/>
            <Route path='/notes' element={<Notes items={items} setItems={setItems}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<Missing />} />

        </Routes>
        </div>
        </>
  );
}

export default Content;