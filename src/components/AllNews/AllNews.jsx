import { useEffect, useState } from "react";

const AllNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_TOP_NEWS_URL
      }category=general&lang=en&country=us&max=10&apikey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles || []);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default AllNews;
