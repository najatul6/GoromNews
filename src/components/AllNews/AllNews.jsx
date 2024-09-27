import { useEffect, useState } from "react";

const AllNews = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_TOP_NEWS_URL
      }category=${category}&lang=en&country=us&max=10&apikey=${
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
  }, [category]);

  return (
    <div>
      <h1>All News of {category}</h1>
      {news.length > 0 ? (
        news.slice(0, 4).map((article, index) => (
          <div key={index} className="news-item">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default AllNews;
