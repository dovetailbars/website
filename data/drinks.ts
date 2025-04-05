import type { Drink } from "../src/types";

const allDrinks = new Map<string, Drink>();

allDrinks.set("Old Fashioned", {
    type: "cocktail",
    name: "The Old Fashioned",
    description: "Wild Turkey 101 – Picon Amer – shortbread – spiced maple – lapsang & orange tea",
    image: "/images/old-fashioned.jpg"
});

allDrinks.set("Bloody Mary", {
    type: "cocktail",
    name: "The Bloody Mary",
    description: "Vodka – Noilly Prat – tomato – harissa – olive brine – dark soy",
    image: "/images/bloody-mary.jpg"
});

allDrinks.set("Mimosa", {
    type: "cocktail",
    name: "The Mimosa",
    description: "Sipsmith London Dry Gin – Campari – blood orange – tonic",
    image: "/images/mimosa.jpg"
});

allDrinks.set("Pornstar Martini", {
    type: "cocktail",
    name: "The Pornstar Martini",
    description: "Vanilla Vodka – Marlborough Sauvignon Blanc – apricot preserve – dry cider",
    image: "/images/pornstar-martini.jpg"
});

allDrinks.set("Bramble", {
    type: "cocktail",
    name: "The Bramble",
    description: "Bombay Bramble – port wine – prosecco – lemon sorbet",
    image: "/images/bramble.jpg"
});

allDrinks.set("Mojito", {
    type: "cocktail",
    name: "The Mojito",
    description: "Planteray 3 Stars – spiced lime & mint cordial – soda",
    image: "/images/mojito.jpg"
});

allDrinks.set("Pina Colada", {
    type: "cocktail",
    name: "The Pina Colada",
    description: "Pusser’s Navy Rum – Crème de Banane – Pedro Ximenez – dulce de leche – orange",
    image: "/images/pina-colada.jpg"
});

allDrinks.set("Margarita", {
    type: "cocktail",
    name: "The Margarita",
    description: "El Jimador Blanco – Crème de Fraise des bois – prosecco",
    image: "/images/margarita.jpg"
});

allDrinks.set("Cuba Libra", {
    type: "cocktail",
    name: "The Cuba Libra",
    description: "Cane Rock Spiced Rum – Velvet Falernum – cherry & vanilla – kola nut",
    image: "/images/cuba-libra.jpg"
});

allDrinks.set("Espresso Martini", {
    type: "cocktail",
    name: "The Espresso Martini",
    subname: "Caffeinated or Decaffeinated",
    description: "Eristoff – Kahlua – salted espresso – vanilla & white cacao",
    image: "/images/espresso-martini.jpg"
});

allDrinks.set("The Hemmingway Daiquiri", {
    type: "cocktail",
    name: "The Hemmingway Daiquiri",
    description: "Planteray 3 Star – Maraschino – grapefruit",
    image: "/images/hemingway-daiquiri.jpg"
});

allDrinks.set("The Dirty Martini", {
    type: "cocktail",
    name: "The Dirty Martini",
    description: "London Dry Gin – Cocchi Americano – Manzanilla olive brine",
    image: "/images/dirty-martini.jpg"
});

export default allDrinks;