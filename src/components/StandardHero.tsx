export default function StandardHero({ heading = "", subheading = "", children = null }) {
    return (
        <>
            <h2 className="headerTitle">{heading}</h2>
            {subheading && <h3>{subheading}</h3>}
            {children && <p>{children}</p>}
        </>
    );
}
