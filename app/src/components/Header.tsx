import './Header.css'; 

export default function Header({ children, height = "60vh" }) {
   
    return (
        <header style={{ height: height }}>
            { children }
        </header>
    );
}
