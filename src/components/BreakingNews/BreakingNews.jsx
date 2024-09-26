import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const [headline, setHeadline] = useState();
  console.log(headline);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_NEWS_URL
      }category=general&lang=en&country=us&max=10&apikey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const articleTitles = data.articles.map((article) => article.title); // Extract titles
        setHeadline(articleTitles); // Set the titles into state
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  return (
    <div className="flex justify-center items-center p-4 bg-[#F3F3F3] max-w-7xl border border-red-600">
      <p className="py-2 px-3 bg-light-blue text-white text-xl font-bold">
        Latest
      </p>
      <div className="font-bold uppercase flex-1">
        <Marquee speed={120} pauseOnHover={true}>
       {/* <p>{headline}</p> */}
          <p className="flex justify-center items-center border-red-600">
            {headline?.length > 0
              ? headline.map((title, index) => <p className="flex gap-2" key={index}>| {title} | </p>)
              : "Loading Breaking news..."}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
