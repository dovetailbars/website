type Props = { title: string; embedUrl: string; };

export default function GoogleMaps({ title, embedUrl }: Props) {
    if (!embedUrl) {
        return <></>;
    }
    
    return (<>    
    <a id="map"></a>
    <iframe className="map" loading="lazy" src={embedUrl} title={title} aria-label={title}></iframe>
    </>)
}