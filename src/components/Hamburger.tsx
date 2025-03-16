import "./Hamburger.css";


export default function Hamburger () {
    return (
        <>
            <label htmlFor="hamburger" className="hamburger-label">
                <span className="hamburger-bar hamburger-bar--top"></span>
                <span className="hamburger-bar hamburger-bar--middle"></span>
                <span className="hamburger-bar hamburger-bar--bottom"></span>
            </label>
            <input type="checkbox" id="hamburger" className="hamburger-checkbox" />
        </>
    );
}
