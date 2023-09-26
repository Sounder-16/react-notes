import {useState, useEffect} from 'react'

const useWindowSize = () => {
    const [width, setWidth] = useState(undefined);
    const setResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        setResize();
        window.addEventListener('resize', setResize);
    }, [])
    return width;
}
export default useWindowSize