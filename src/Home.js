import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';
const Home = ({items}) => {
    const {loading, fetchError} = useContext(DataContext);
    const empty = items.length === 0;
  return (
    <>
      {loading && <p className='loading'>Loading data...</p>}
      {!loading && fetchError && <p className='error'>Data not fetched !!!</p>}
      {!loading && !fetchError && 
      <>
      <h2>Home</h2>
      {empty && <p className='empty'>List is Empty</p>}
      {!empty && 
      <ul>
      {items.map(item => (
        <Link to={`/${item.id}`} >
          <li className='items' key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.datetime}</p>
            <p>{item.content.length<=30?item.content:item.content.slice(0, 25)+'...'}</p>
          </li>
        </Link>
      ))}
      </ul>
    }
    </>
    }
    </>
  );
  }
export default Home;