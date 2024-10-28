type Props = {
    title?: string
    children: React.ReactNode;
};

export default function IntroSection({ title, children }: Props) {
    return (<>
        <section className="secondary">
            <div className="intro">
                { title && <h2>{title}</h2> }
                { children }                  
            </div>
        </section>
    </>);
}