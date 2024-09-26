import { useEffect, useState } from "react";

const Advertise = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch("/adds.json")
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
        {ads.map((ad) => (
          <a
            key={ad.id}
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={ad.img}
              alt={ad.alt}
              className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
