import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";

const HotNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_TOP_NEWS_URL
      }category=sports&lang=en&country=us&max=3&apikey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const topThreeNews = data.articles?.slice(0, 4); // Extract only the top 3 articles
        setNews(topThreeNews); // Set the news into state
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

//   format the date without the time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const localDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return localDate;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-xs">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest News</h2>
      <div className="space-y-4">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="border p-3 rounded-lg shadow-sm">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500 mt-2">
                {article.description ? article.description?.slice(0, 100) : ""}
                ...
              </p>
              <p className="flex justify-center items-center py-2 gap-2">
                <FaCalendar /> {formatDate(article.publishedAt)}
              </p>
            </div>
          ))
        ) : (
          <p>Loading latest news...</p>
        )}
      </div>
    </div>
  );
};

export default HotNews;
