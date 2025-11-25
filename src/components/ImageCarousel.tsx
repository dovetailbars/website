import { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

export default function({ images, autoScroll = true, previews = true }: { images: string[], autoScroll?: boolean, previews?: boolean }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [autoProgress, setAutoProgress] = useState(autoScroll);
    const touchStartX = useRef<number | null>(null);

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

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) {
            return
        };

        const deltaX = touchStartX.current - e.changedTouches[0].clientX;
        const threshold = 50;

        if (deltaX > threshold) {
            handleNext();
        } else if (deltaX < -threshold) {
            handlePrev();
        }

        touchStartX.current = null;
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
            <div 
                className="main-image"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button type="button" className="arrow left-arrow" onClick={handlePrev}>
                    &#8592;
                </button>
                <img src={images[selectedIndex]} alt={`Gallery image ${selectedIndex}`} />
                <button type="button" className="arrow right-arrow" onClick={handleNext}>
                    &#8594;
                </button>
            </div>
            
            {previews && (
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
            </div>)}
        </div>
    );
}