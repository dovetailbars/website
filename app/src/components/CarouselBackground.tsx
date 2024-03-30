import "./CarouselBackground.css";

export type Item = { src: string, alt: string };
export type CarouselProps = { items: Item[]; children: React.ReactNode; height?: string }

export default function CarouselBackground({ items, children }: CarouselProps) {

    const selectedBackgroundImage = items[Math.floor(Math.random() * items.length)] ?? items[0] ?? { src: "/images/DTB-Initial-Cocktail-Shoot-LR-012.jpg", alt: "" };
    
    return (
        <div className="carousel" style={{ backgroundImage: `url(${selectedBackgroundImage.src})` }}>
            { children }
        </div>
   );

}
        