import "./Hero.css";

export default function Hero({ children }) {
    return (
        <div className="hero">
            { children }
        </div>
    );
}