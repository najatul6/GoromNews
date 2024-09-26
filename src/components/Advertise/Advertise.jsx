import { useEffect, useState } from "react";

const Advertise = () => {
  const [ads, setAds] = useState();
  
  useEffect(() => {
    fetch("/ads.json")
      .then((response) => response.json())
      .then((data) => setAds(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full my-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Sponsored Ads
      </h2>
      <div className="space-y-4">
        {ads?.map((ad) => (
          <a
            key={ad.id}
            href={ad.link}
            title={ad.title}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <img
              src={ad.img}
              alt={ad.alt}
              className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-200"
            />
            {/* Tooltip */}
            <div className="absolute bottom-0 left-0 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0">
              {ad.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
