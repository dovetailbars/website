import GoogleMaps from "../../../components/GoogleMaps";
import { Layout } from "../../../components/Layout";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
        content: (<>
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail Clapton</h1>
        </>)
    };
}

export function Content() {
    return (<>
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="intro">
                    <h2>Dovetail Clapton</h2>
                    <p>Nestled in the heart of Clapton, a stone’s throw away from Hackney’s vibrant nightlife scene, you’ll discover Dovetail Clapton – a spacious bar that beckons both locals and curious wanderers alike.</p>
                    <p>Whether you’re seeking refuge from the city’s hustle or celebrating life’s moments, this bar invites you to savor the art of good conversation and exceptional drinks.</p>
                    <p>Explore Dovetail Clapton, Clapton’s best-kept secret.</p>
                </div>
            </section>

            <GoogleMaps 
                title="Dovetail Clapton" 
                embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11467.132511129797!2d-0.0679031374399165!3d51.544295188452374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d26818538eb%3A0x169c5afe1389e1fa!2sDovetail%20Bar%20-%20Clapton!5e0!3m2!1sen!2suk!4v1713003089596!5m2!1sen!2suk" 
            />
            
        </Layout>
    </>);
}
