
import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

import * as Home from './pages/Home';
import * as CocktailMenu from './pages/CocktailMenu';
import * as PrivateHire from './pages/PrivateHire';
import * as Bookings from './pages/Bookings';
import * as BookingConfirmation from './pages/BookingConfirmation';
import * as CocktailMakingClass from './pages/CocktailMakingClass';
import * as BarsCoventGarden from './pages/bars/covent-garden/Home';
import * as BarsCoventGardenPrivateHire from './pages/bars/covent-garden/PrivateHire';
import * as BarsClapton from './pages/bars/clapton/Home';
import * as BookingsCoventGarden from './pages/bars/covent-garden/Bookings';
import * as BookingsClapton from './pages/bars/clapton/Bookings';
import ScrollToTop from "./components/ScrollToTop";

export default function Routes() {
  return (<>
    <BrowserRouter>
      <ScrollToTop />
      <ReactRoutes>
        <Route path="/" element={<Home.Content />} />
        <Route path="/covent-garden" element={<BarsCoventGarden.Content />} />
        <Route path="/covent-garden/bookings" element={<BookingsCoventGarden.Content />} />
        <Route path="/covent-garden/private-hire" element={<BarsCoventGardenPrivateHire.Content />} />
        <Route path="/clapton" element={<BarsClapton.Content />} />
        <Route path="/clapton/bookings" element={<BookingsClapton.Content />} />
        <Route path="/cocktail-menu" element={<CocktailMenu.Content />} />
        <Route path="/private-hire" element={<PrivateHire.Content />} />
        <Route path="/cocktail-making-class" element={<CocktailMakingClass.Content />} />
        <Route path="/bookings" element={<Bookings.Content />} />
        <Route path="/bookings/confirmation" element={<BookingConfirmation.Content />} />
        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </BrowserRouter>
    </>
  );
}
