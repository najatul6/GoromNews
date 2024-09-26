import React from "react";

const Advertise = () => {
  const ads = [
    {
      id: 1,
      img: "https://via.placeholder.com/300x250?text=Ad+1", // Example ad image URL
      link: "#",
      alt: "Ad 1",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/300x250?text=Ad+2", // Example ad image URL
      link: "#",
      alt: "Ad 2",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/300x250?text=Ad+3", // Example ad image URL
      link: "#",
      alt: "Ad 3",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sponsored Ads</h2>
      <div className="space-y-4">
        {ads.map((ad) => (
          <a key={ad.id} href={ad.link} target="_blank" rel="noopener noreferrer" className="block">
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
