interface HeroData {
    image: string;
    content: JSX.Element;
}

interface BarData {
    name: string;
    openingHours: OpeningHours;
    googleMapsLink: string;
    designMyNightConfig: DesignMyNightConfig;

    location: string;

    heroContent: HeroData;

    overviewContent: JSX.Element;

    privateHireContent?: JSX.Element;
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