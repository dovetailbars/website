import "./Hero.css";

export default function Hero(hero: HeroData, heroHeight: string) {
    return (
        <div className={`hero ${hero.class}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,8,10,0.5) 0%, rgba(8,8,10,0.5) 100%), url(${hero.image})` }}>
           {hero.content}
        </div>
    )
}
