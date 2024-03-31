# Website

The Dovetail (glow up era) website.

Hosted on Azure Static Web Apps here: https://portal.azure.com/#@daviddavidwhitneyco292.onmicrosoft.com/resource/subscriptions/19148c60-3e4a-465a-bfc0-06941727ea7e/resourcegroups/StaticSites/providers/Microsoft.Web/staticSites/dovetail/staticsite

DNS Managed by WordPress.com (and some CNAMEs and a redirect rule).

Email form managed by Formspree.io (david at davidwhitney co uk login).

## Development

This is a react app that is built / managed by Vite.

To run the site locally, you'll need to have Node.js installed. Then, run the following commands:

```bash
npm install
npm run start
```

This will start a local development server at `http://localhost:8080`.

## Deployment

The site is deployed automatically when changes are pushed to the `main` branch. The deployment is managed by Azure Static Web Apps.

## DNS

Currently mapped to https://beta.dovetail.co.uk until we're ready to go live.
