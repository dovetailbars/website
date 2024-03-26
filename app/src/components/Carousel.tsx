export type Item = { src: string, alt: string };
export type CarouselProps = { items: Item[]; children: React.ReactNode; }

export default function Carousel({ items, children }: CarouselProps) {

    const selectedBackgroundImage = items[Math.floor(Math.random() * items.length)] ?? items[0] ?? { src: "/images/DTB-Initial-Cocktail-Shoot-LR-055.png", alt: "" };
    
    const sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${selectedBackgroundImage.src})`,
        backgroundSize: "cover",
    };

    return (
        <div className="carousel" style={sectionStyle}>
            { children }
        </div>
   );

}
        