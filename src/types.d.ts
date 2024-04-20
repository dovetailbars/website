interface HeroData {
    image: string;
    content: JSX.Element;
}

interface BarData {
    name: string;
    googleMapsLink: string;
    designMyNightConfig: DesignMyNightConfig;

    heroContent: HeroData;

    overviewContent: JSX.Element;
    footerContent: JSX.Element;

    privateHireContent?: JSX.Element;
}

interface DesignMyNightConfig {
    venueId: string;
    gtmCode: string;
    returnUrl: string;
}