# Website

The [Dovetail](https://dovetail.co.uk) (glow up era) website.

- Hosted on [Azure Static Web Apps here](https://portal.azure.com/#@daviddavidwhitneyco292.onmicrosoft.com/resource/subscriptions/19148c60-3e4a-465a-bfc0-06941727ea7e/resourcegroups/StaticSites/providers/Microsoft.Web/staticSites/dovetail/staticsite).
- DNS Managed by WordPress.com (with an ALIAS redirect to Azure Static WebApps).
- Email form managed by Formspree.io (david login).

## Development

This is a react app that is built / managed by Vite.

To run the site locally, you'll need to have Node.js installed. Then, run the following commands:

```bash
npm install
npm run start
```

This will start a local development server at `http://localhost:8080`.

This site also contains configuration for `GitHub CodeSpaces` so you can develop directly in the browser.

## Deployment

The site is deployed automatically when changes are pushed to the `main` branch. The deployment is managed by Azure Static Web Apps.

## Help! What Is All This! I Just Want To Edit Some Copy! What Do I Do?

We gotchu bro (probably Tim, or Jay). Here's a quick guide to the important files:

- `data/` contains the copy for the site. Each file is a JSON object (don't worry about what that means), but you can just edit the text in there.
- `src/` contains the code for the site. You probably don't need to touch this, but if you do, the main file is `main.tsx`.
- `public/` contains the images and other assets for the site. You can just drop files in here and reference them in the JSON files in `data/`. These assets are served at the root of the site, so `public/images/foo.jpg` is available at `https://dovetail.co.uk/images/foo.jpg`.

Realistically, you're just going to be editing the JSON files in `data/` and dropping images in `public/`. If you need help, just ask David.

The configuration in the `data/` files is pretty simple - it looks a little like this:

```jsx
const name = "Dovetail Clapton";

export default {
    name: name,
    
    googleMapsLink: "https://www.google.com/maps/embed?pb=!......",
    
    designMyNightConfig: {
        venueId: "660d42467122fe5177534b13",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/bookings/confirmation"
    },

    openingHours: {
        "Monday to Friday": "5pm – 12.30am",
        "Saturday": "2pm – 12:30 am",
        "Sunday": "5pm – 11:30 pm"
    },

    location: "11 Chatsworth Road, Clapton, London E5 0LH",

    ... etc
```

Obviously this is code, so edit carefully - generally just edit the text and links and IDs between the quotes if you need to change something. Be careful not to add quotation marks inside the copy as this will break the markup.
If you need to use quotes, you need to escape them by typing `\"` instead of `"`.

It's probably self explanatory, but if you need help, yell.

## I want whole new pages and stuff

Hi David, probably in the future. Quick guide for when you forget what you did.

- Add a new route to `src/Routes.tsx` to configure react-router.
- For bar specific pages, add a new `pages/bars/Xyz.tsx page` - the router will route to it with a `barId` prop.
- Load bar data like this:

```jsx
import { useParams } from "react-router-dom";
import { getBarData} from "../../../data";
import BarPageLayout from "./BarPageLayout";

export default function() {
    const params = useParams();
    const data = getBarData(params.barId);

    if (!data) {
        return <Navigate replace to="/" />
    }

    ... do something
    
    return (
        <BarPageLayout barData={data}>
            <>
                ... some UI here
            </>
        </BarPageLayout>
    );
}
```

Everything else is just in `src/pages` and `src/components` for all the integration bits, just make sure to add a new route in `src/Routes.tsx` to make it accessible.
