import React from 'react'
import {useState, useEffect} from 'react';

import Content from './Content';
const Main = () => {
    const [fetchError, setFetchError] = useState(null);
    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    useEffect(() => {
        try{
            const APIURL = 'http://localhost:3500/notes';
            const fetchItems = async () => {
            const response = await fetch(APIURL);
            if(!response.ok) throw new Error('data not found');
            const data = await response.json()
            setItems(data);
            setFetchError(null);
            }
            fetchItems();
        }
        catch(err){
            setFetchError(err.message);
        }
        }, []
    )
  return (
    <main>
        {fetchError && <p>Data not fetched</p>}
        {!fetchError && <Content 
                        setSearchItem={setSearchItem} 
                        items={items.filter(item => (
                            (item.title.toLowerCase()).includes(searchItem.toLowerCase())
                        ))} 
                        searchItem={searchItem}
                        setItems={setItems}/>}
    </main>
  )
}

export default Main