import type { JSX } from "react";

interface Drink {
    type: "cocktail" | "spritz" | "wine" | "beer", 
    name: string; 
    subname?: string, 
    description: string; 
    image: string; 
}

interface HeroData {
    image: string;
    content: JSX.Element;
    class?: string;
}

interface BarData {
    id: string;
    name: string;
    venueName: string;
    openingHours: OpeningHours;
    googleMapsLink: string;
    designMyNightConfig: DesignMyNightConfig;

    location: string;

    heroImage: string;
    spotlightImage: string;
    spotlightText: JSX.Element;
    overviewContent: JSX.Element;
    privateHireContent?: JSX.Element;

    cocktailPrice: number,
    menu: Drink[];
}

interface DesignMyNightConfig {
    venueId: string;
    gtmCode: string;
    returnUrl: string;
}

interface OpeningHours {
    [label: string]: string;
}

interface DovetailInfo {
    phone: string;
    email: string;
}
