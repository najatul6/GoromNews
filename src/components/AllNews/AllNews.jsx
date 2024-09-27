import { useEffect, useState } from "react";

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading = true
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    fetch(
      `${
        import.meta.env.VITE_TOP_NEWS_URL
      }category=general&lang=en&country=us&max=10&apikey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles || []); // Update news state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news"); // Set error state if fetching fails
        setLoading(false);
      });
  }, []); // Fetch news when the component mounts

  return (
    <div>
      {/* Display loading spinner or message */}
      {loading && <div>Loading...</div>}

      {/* Display error message if there's an error */}
      {error && <div>{error}</div>}

      {/* Display news articles in a grid format */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
          {news.map((article, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            >
              <img
                className="w-full h-48 object-cover"
                src={article.urlToImage}
                alt={article.title}
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{article.title}</h2>
                <p className="text-gray-700 text-base">{article.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {article.source.name}
                </span>
                <a
                  href={article.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNews;
