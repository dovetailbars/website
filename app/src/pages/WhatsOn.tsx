import { Layout } from "../components/Layout";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: (<>
            <h1 className="xx-large x-wide">Cocktail Menu</h1> 
        </>)
    };
}


export function Content() {
    return (
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="centeredContent">
                    <img src="/images/Dovetail-Menu.jpg" alt="Cocktail Menu" className="fullWidth" />
                </div>
            </section>
        </Layout>
    );
}
