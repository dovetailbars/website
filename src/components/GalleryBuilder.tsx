import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import yaml from 'js-yaml';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryBuilder.css";

type GalleryBuilderProps = {
  sections: string[];
};

type ImageItem = {
  original: string;
  thumbnail: string;
  description?: string;
};

const GalleryBuilder: React.FC<GalleryBuilderProps> = ({ sections }) => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const location = useLocation();

  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/data/gallery.yaml');
        const text = await response.text();
        const data = yaml.load(text) as any;
  
        const sectionsMap = Object.fromEntries(
          data.sections.map((section: any) => [
            Object.keys(section)[0], 
            section[Object.keys(section)[0]].dir
          ])
        );
  
        const getSectionImages = (sectionName: string) => {
          const dir = sectionsMap[sectionName];
          const sectionImages = data[sectionName] || [];
          console.log(sectionName)
  
          return sectionImages.map((img: any) => ({
            original: `${dir}/${img.filename}`,
            thumbnail: img.thumbnail 
                        ? `${dir}/${img.thumbnail}` 
                        : `${dir}/${img.filename}`,
            description: img.desc || "" 
          }));
        };
  
        const allImages = sections.flatMap(getSectionImages);
        const shuffledImages = shuffleArray(allImages);
        setImages(shuffledImages);
      } catch (error) {
        console.error("Error loading gallery:", error);
      }
    };

    fetchImages();
  }, [location.pathname]);  

  return (
    <section id="gallery" className="fullHeight">
        <ImageGallery 
        items={images} 
          autoPlay 
        slideInterval={4000} 
        additionalClass="venueGallery" 
        //   showThumbnails={false} 
        lazyLoad={true}
        // showNav={true}
        slideOnThumbnailOver={true} 
        showFullscreenButton={false} 
        />
      </section>
  );
};

export default GalleryBuilder;
