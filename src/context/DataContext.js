import { createContext, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import api from '../api/apiDataFetch';
const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const width = useWindowSize();
    const [fetchError, setFetchError] = useState(null);
    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [loading, setLoading] = useState(true);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [ID, setId] = useState(0);
    useEffect(() => {
            const fetchItems = async () => {
            try{
            const response = await api.get('/notes');
            setItems(response.data);
            setFetchError(null);
            }
            catch(err){
            setFetchError(err.message);
            }
            }
            setTimeout(()=>{
                fetchItems();
                setLoading(false);
            }, 1500);
        }, []);
    return (
    <DataContext.Provider value={{
        width, fetchError, setFetchError, items, setItems,
        searchItem, setSearchItem, loading, setLoading,
        editTitle, setEditTitle, editContent, setEditContent, ID, setId
    }}>
        {children}
    </DataContext.Provider>
    );
}
export default DataContext;