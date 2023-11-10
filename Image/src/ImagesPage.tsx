import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./index.css";

interface ImageType {
  id: number;
  url: string;
}

function ImagesPage() {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/images.json");

        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Eroare JSON:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Carousel controls={false} indicators={false} interval={5000}>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100 h-100 min-vw-100 min-vh-100"
            src={image.url}
            alt={`Slide ${image.id}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImagesPage;
