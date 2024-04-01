
import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

import * as Home from './pages/Home';
import * as CocktailMenu from './pages/CocktailMenu';
import * as WhatsOn from './pages/WhatsOn';
import * as PrivateHire from './pages/PrivateHire';
import * as Bookings from './pages/Bookings';
import * as BookingConfirmation from './pages/BookingConfirmation';
import * as CocktailMakingClass from './pages/CocktailMakingClass';

export default function Routes() {
  return (<>
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home.Content />} />
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
