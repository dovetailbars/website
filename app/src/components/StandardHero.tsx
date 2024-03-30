export default function StandardHero({ heading, subheading = "", children = null }) {

    const subheadMarkup = subheading != "" ? (<><br /><span className="x-wide">{subheading}</span></>) : (<></>);
    const childrenMarkup = children ? (<p>{children}</p>) : (<></>);

    if (subheading === "" && children === null) {
        return (<h1 className="xx-large x-wide">{ heading }</h1>);
    }

    return (<>
        <p>
            <span className="xx-large outline">{heading}</span>
            { subheadMarkup }
        </p>
        { childrenMarkup }
    </>)
}