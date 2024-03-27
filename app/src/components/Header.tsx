import './Header.css'; 

export default function Header({ children, height }) {
   
    return (
        <header style={{ height: height }}>
            { children }
        </header>
    );
}
