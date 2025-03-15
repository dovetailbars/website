import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import MenuDisplay from "../components/MenuDisplay"; // Import MenuDisplay

export default function CocktailMenuPage() {
  const hero = {
    image: "/images/webpDTB-Initial-Cocktail-Shoot-LR-020.jpg",
    content: <StandardHero heading="Cocktail Menu" />
  };

  return (
    // <Layout hero={hero}>
    <Layout>
      <section className="secondary  fullHeight">
        <div className="centeredContent centerAligned">
          <MenuDisplay file="/Dovetail-Generic.pdf" />
        </div>
      </section>
    </Layout>
  );
}
