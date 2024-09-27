import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to={`/news/${category.category}`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "uppercase font-bold bg-[#E7E7E7] px-5 py-4 rounded-xl w-full"
              : "uppercase px-5 py-4 hover:bg-[#E7E7E7] text-dark-black hover:font-bold w-full rounded-xl "
          }
          key={category.id}
        >
          {category?.category}
        </NavLink>
      ))}
    </div>
  );
};

export default AllCategory;
