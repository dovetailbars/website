export default function StandardHero({ heading = "", subheading = "", children = null }) {

    if (heading === "" && subheading === "" && children === null) {
        return (<></>);
    }

    if (heading === "" && subheading === "") {
        return (<>{children}</>);
    }

    if (subheading === "" && children === null) {
        return (<h2 className="headerTitle">{ heading }</h2>);
    }
    
    const headingMarkup = heading != "" ? (<h2>{heading}</h2>) : (<></>);
    const subheadMarkup = subheading != "" ? (<h3>{subheading}</h3>) : (<></>);
    const childrenMarkup = children ? (<p>{children}</p>) : (<></>);

    return (<>
        { headingMarkup }
        { subheadMarkup }  
        { childrenMarkup }
    </>)
}
