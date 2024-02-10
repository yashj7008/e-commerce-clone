import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../store/searchSlice';


const Search = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState("");

  
        
    
    function onSearchData(e){
        setData(e.target.value)
    }

    dispatch(setSearchTerm(data))
   
  return (
    <>
    <div className="searchBar">
        <input type="text" placeholder="Enter Product Name"  value={data} onChange={onSearchData}></input>
      </div>
    </>
  )
}

export default Search