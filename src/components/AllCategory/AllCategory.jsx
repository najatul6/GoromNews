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
    <div className="flex flex-col justify-center items-center gap-4">
        {categories.map((category)=>(
            <div key={category.id}>{category?.category}</div>
        ))}
    </div>
  )
}

export default AllCategory