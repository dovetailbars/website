type Props = {
    title?: string
    children: React.ReactNode;
    className?: string;
};

export default function IntroSection({ title, children, className }: Props) {
    className = className || "";
    
    return (<>
        <section className={`secondary ${className}`}>
            <div className="intro">
                { title && <h2>{title}</h2> }
                { children }                  
            </div>
        </section>
    </>);
}