export default function InstagramEmbed({ handle }) {
    const url = `https://www.instagram.com/${handle}/embed`;

    return (
        <iframe
            src={url}
            className="instagramFeed"
            title="Instagram Feed"
            aria-label="Instagram Feed"
            frameBorder="0"
        ></iframe>
    );
}