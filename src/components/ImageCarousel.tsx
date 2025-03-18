import { useState, useEffect } from 'react';
import './ImageCarousel.css';

export default function({ images }: { images: string[] }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [autoProgress, setAutoProgress] = useState(true);

    const handlePrev = () => {
        setAutoProgress(false);
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setAutoProgress(false);
        setSelectedIndex((selectedIndex + 1) % images.length);
    };

    const handleThumbnailClick = (index: number) => {
        setAutoProgress(false);
        setSelectedIndex(index);
    };

    useEffect(() => {
        if (!autoProgress) return;
        const interval = setInterval(() => {
            setSelectedIndex(index => (index + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [autoProgress, images.length]);

    return (
        <div className="carousel">
            <div className="main-image">
                <button type="button" className="arrow left-arrow" onClick={handlePrev}>
                    &#8592;
                </button>
                <img src={images[selectedIndex]} alt={`Gallery image ${selectedIndex}`} />
                <button type="button" className="arrow right-arrow" onClick={handleNext}>
                    &#8594;
                </button>
            </div>
            <div className="thumbnails">
                { images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img src={image} alt={`Thumbnail ${index}`} />
                    </div>
                )) }
            </div>
        </div>
    );
}