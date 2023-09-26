import React, { useContext } from 'react'
import { FaMobileAlt } from "react-icons/fa";
import {FaTabletAlt} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa6'
import DataContext from './context/DataContext';
const Header = ({title}) => {
  const {width} = useContext(DataContext);
  return (
      <header className="App-header">
            <h1>{title}</h1>
            <div className="icons">
            {width < 425 ? <FaMobileAlt/> :
                    width < 768 ?<FaTabletAlt/> :
                            <FaDesktop/>}
            </div>
      </header>
  )
}

export default Header