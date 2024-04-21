import { Layout } from "../../components/Layout";
import DovetailInfo from "../../../data/dovetail-info";

export default function({ barData, children }: { barData: BarData, children: JSX.Element }) {
    const footer = <BarFooterContent openingHours={barData.openingHours} location={barData.location} />;

    return (
        <Layout hero={barData.heroContent} footerContent={footer}>
            { children }
        </Layout>
    );
}

function BarFooterContent({ openingHours, location } : { openingHours: OpeningHours, location: string }) {
    const openingHoursElements = Object.entries(openingHours).map(([label, hours]) => (
        <>{hours} - {label}<br /></>
    ));

    const addressParts = location.split(',').map(part => <>{part}<br /></>);
    
    return (<>
        <section>
        <h2>Opening Hours</h2>
        <p>
            { openingHoursElements }
        </p>
        </section>
        <section>
            <h2>Location</h2>
            <p>
                <a href="#map">{ addressParts }</a>
            </p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                {DovetailInfo.email}<br />
                {DovetailInfo.phone}
            </p>
        </section>
    </>);
}
