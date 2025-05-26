import { useState } from "react";

const images = [
  "./src/images/i1.jpg",
  "./src/images/i3.jpg",
  "./src/images/i2.jpg",  
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Restaurant Interior"
          className="w-60 h-40 object-cover cursor-pointer"
          onClick={() => setSelectedImage(img)}
        />
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <img src={selectedImage} className="max-w-3xl max-h-screen" />
          <button className="absolute top-4 right-4 text-white text-lg" onClick={() => setSelectedImage(null)}>❌</button>
        </div>
      )}
    </div>
  );
}