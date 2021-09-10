import { useState } from "react";
import Image from "next/image";

const DishGallery = ({ images }) => {
  const [galleryItems, setGalleryItems] = useState([
    {
      name: "gallery-1",
      image: "/assets/images/dishes/gallery-1.jpg",
    },
    {
      name: "gallery-2",
      image: "/assets/images/dishes/gallery-2.jpg",
    },
    {
      name: "gallery-3",
      image: "/assets/images/dishes/gallery-3.jpg",
    },
    {
      name: "gallery-4",
      image: "/assets/images/dishes/gallery-4.jpg",
    },
  ]);

  return (
    <div className="h-full w-10/12 ml-auto grid grid-cols-4 grid-rows-2 gap-3">
      {galleryItems.map((image, index) => (
        <div
          className={`relative ${
            index === 0 ? "row-span-2 col-span-2" : "row-span-1 col-span-1"
          }  bg-gray-200 rounded-lg`}
          key={index}
        >
          {/* <Image src={image} alt="gallery image" layout="fill" /> */}
        </div>
      ))}

      {galleryItems.length > 4 && (
        <div className="flex items-center justify-center row-span-1 col-span-1 bg-gray-400 rounded-lg">
          <button>View More</button>
        </div>
      )}
    </div>
  );
};

export default DishGallery;
