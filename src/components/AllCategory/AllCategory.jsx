import { useEffect } from "react";
import { useState } from "react";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      {categories.map((category) => (
        <p
          className="uppercase font-bold bg-[#E7E7E7] px-5 py-4 w-full rounded-xl text-light-gray hover:text-dark-black"
          key={category.id}
        >
          {category?.category}
        </p>
      ))}
    </div>
  );
};

export default AllCategory;
