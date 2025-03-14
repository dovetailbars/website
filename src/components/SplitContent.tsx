type Props = {
    children: React.ReactNode;
    sectionTitle?: string;
    imageRight?: boolean;
};

export default function SplitContent({ children, sectionTitle, imageRight }: Props) {
    const titleElements = sectionTitle ? <h2 className="sectionTitle">{sectionTitle}</h2> : null;
    const contentClass = `centeredContent split ${imageRight ? 'imageRight' : ''}`;

    return (
        <section className="primary">
            { titleElements }

            <div className={contentClass}>
                { children }
            </div>
        </section>
    );
}