import { useState } from "react";

function Image() {
  const [images, setImages] = useState([
    { id: 1, src: "https://triplook.me/media/resorts/photo/b/8/b58.jpg", width: 600, height: 400 }
  ]);

  const addImage = () => {
    const newImage = {
      id: images.length + 1,
      src: "https://triplook.me/media/resorts/photo/b/8/b58.jpg",
      width: 600,
      height: 400,
    };
    setImages([...images, newImage]);
  };

  const deleteImage = () => {
    setImages(images.slice(0, -1));
  };

  const resizeImage = (factor) => {
    setImages((prevImages) => {
      const lastImage = prevImages[prevImages.length - 1];
      const updatedImages = [...prevImages];
      updatedImages[updatedImages.length - 1] = {
        ...lastImage,
        width: lastImage.width * factor,
        height: lastImage.height * factor,
      };
      return updatedImages;
    });
  };

  return (
    <div className="image-container">
      {images.map((image) => (
        <div key={image.id}>
          <a href="https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D1%82%D0%B5%D0%B2%D1%96%D0%B4%D0%B5%D0%BE">
            <img
              src={image.src}
              alt="Montevideo"
              style={{ width: `${image.width}px`, height: `${image.height}px` }}
            />
          </a>
        </div>
      ))}
      <div className="button-container">
        <button onClick={addImage}>Додати</button>
        <button onClick={() => resizeImage(1.2)}>Збільшити</button>
        <button onClick={() => resizeImage(1 / 1.2)}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
