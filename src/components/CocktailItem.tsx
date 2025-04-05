import "./CocktailItem.css";
import { Drink } from "../types";

export default function CocktailItem({cocktail}: {cocktail: Drink}) {
    return (
        <article className="cocktailmenu_item">
            <div className="cocktailmenu_text">
            <h2>{cocktail.name}</h2>
            {cocktail.subname && (<h3>( {cocktail.subname} )</h3>)}
            <p>{cocktail.description}</p>
            </div>
            <img className="cocktailmenu_img" src={cocktail.image} alt={cocktail.name} />
        </article>
    )
}
