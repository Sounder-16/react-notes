import React, { useContext } from 'react'
import { FcAbout } from "react-icons/fc";
import { GrHomeRounded, GrNotes } from "react-icons/gr";
import {Link} from 'react-router-dom';
import DataContext from './context/DataContext';
const Navbar = () => {
  const {setSearchItem} = useContext(DataContext)
  return (
    <div className="searchtool">
            <form>
                <label htmlFor="searchbox">Search Item</label>
                <input type="text" id='searchbox' role='searchbox' placeholder='Search Title' onChange={e => {setSearchItem(e.target.value)}}/>
            </form>
            <nav className='App-navbar'>
                <Link to='/'><GrHomeRounded /></Link>
                <Link to='/notes'><GrNotes /></Link>
                <Link to='/about'><FcAbout/></Link>
            </nav>
    </div>
  )
}

export default Navbar