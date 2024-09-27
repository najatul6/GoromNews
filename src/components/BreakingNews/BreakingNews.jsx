import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_TOP_NEWS_URL
      }category=technology&lang=en&country=us&max=10&apikey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const articleTitles = data.articles?.slice(0,4).map((article) => article.title); // Extract titles
        setHeadlines(articleTitles); // Set the titles into state
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center p-4 bg-[#F3F3F3] max-w-7xl">
      <p className="py-2 px-3 bg-light-blue text-white text-xl font-bold">
        Latest
      </p>
      <div className="font-bold uppercase flex-1">
        <Marquee speed={120} pauseOnHover={true}>
          {headlines.length > 0
            ? headlines.map((title, index) => (
                <span key={index} className="mx-2">
                  | {title} |
                </span>
              ))
            : "Loading Breaking news..."}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
