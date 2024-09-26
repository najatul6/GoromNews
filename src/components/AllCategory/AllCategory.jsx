import { useEffect } from "react"
import { useState } from "react"

const AllCategory = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>

    </div>
  )
}

export default AllCategory