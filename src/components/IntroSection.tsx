type Props = {
    title: string
    children: React.ReactNode;
};

export default function IntroSection({ title, children }: Props) {
    return (<>
        <section className="secondary">
            <div className="intro">
                <h2>{title}</h2>  
                { children }                  
            </div>
        </section>
    </>);
}