// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $bookings_index from "./routes/bookings/index.tsx";
import * as $cocktail_making_class_index from "./routes/cocktail-making-class/index.tsx";
import * as $cocktail_menu_index from "./routes/cocktail-menu/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $private_hire_index from "./routes/private-hire/index.tsx";
import * as $whats_on_index from "./routes/whats-on/index.tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/bookings/index.tsx": $bookings_index,
    "./routes/cocktail-making-class/index.tsx": $cocktail_making_class_index,
    "./routes/cocktail-menu/index.tsx": $cocktail_menu_index,
    "./routes/index.tsx": $index,
    "./routes/private-hire/index.tsx": $private_hire_index,
    "./routes/whats-on/index.tsx": $whats_on_index,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
