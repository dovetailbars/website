export default function StandardHero({ heading = "", subheading = "", children = null }) {

    const subheadMarkup = subheading != "" ? (<h3>{subheading}</h3>) : (<></>);
    const childrenMarkup = children ? (<p>{children}</p>) : (<></>);

    if (subheading === "" && children === null) {
        return (<h2 className="headerTitle">{ heading }</h2>);
    }

    return (<>
        <h2>{heading}</h2>
            { subheadMarkup }
  
        { childrenMarkup }
    </>)
}
