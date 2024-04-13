type Props = {
    children: React.ReactNode;
    sectionTitle?: string;
};

export default function SplitContent({ children, sectionTitle }: Props) {
    const titleElements = sectionTitle ? <h2 className="sectionTitle">{sectionTitle}</h2> : null;

    return (
        <section className="primary">
            { titleElements }

        <div className="centeredContent split">
            { children }
        </div>
        </section>
    );
}