import "./Hero.css";

type Props = {
    title?: string
    className?: string;
};

export default function Hero() {
    return (
        <div className="hero">
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail</h1>
            <h2>
                <a href="/covent-garden" className="heroLink">Covent Garden</a> | <a href="/clapton" className="heroLink">Clapton</a> | <a href="/leicester-square" className="heroLink">Leicester Square</a>
            </h2>
        </div>
    )
}
