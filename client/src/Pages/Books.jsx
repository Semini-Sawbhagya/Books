import React, { useEffect } from 'react'
import {useState }  from 'react'
import axios from 'axios'

const Books = () => {
  const [books,setBooks]=useState([])

  useEffect(()=>{
    const fetchAllBooks=async  ()=>{
      try{
        const res= await axios.get("http://localhost:8800/books")
      }catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()
},[])
  return (
    <div>Books</div>
  )
}
export default Books