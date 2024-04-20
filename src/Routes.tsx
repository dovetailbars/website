
import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

import * as Home from './pages/Home';
import * as CocktailMenu from './pages/CocktailMenu';
import * as PrivateHire from './pages/PrivateHire';
import * as Bookings from './pages/Bookings';
import * as BookingConfirmation from './pages/BookingConfirmation';
import * as CocktailMakingClass from './pages/CocktailMakingClass';
import * as BarHome from "./pages/bars/Home";
import * as BarBookings from "./pages/bars/Bookings";
import * as BarPrivateHire from "./pages/bars/PrivateHire";

import ScrollToTop from "./components/ScrollToTop";


const loaderFunc = async ({ request, params }) => {
  return { barId: params.barId };
};

export default function Routes() {

  return (<>
    <BrowserRouter>
      <ScrollToTop />
      <ReactRoutes>
        <Route path="/" element={<Home.Content />} />

        <Route path="/cocktail-menu" element={<CocktailMenu.Content />} />
        <Route path="/private-hire" element={<PrivateHire.Content />} />
        <Route path="/cocktail-making-class" element={<CocktailMakingClass.Content />} />
        <Route path="/bookings" element={<Bookings.Content />} />
        <Route path="/bookings/confirmation" element={<BookingConfirmation.Content />} />

        <Route path="/:barId" element={<BarHome.default />} loader={loaderFunc} />
        <Route path="/:barId/bookings" element={<BarBookings.default />} loader={loaderFunc} />
        <Route path="/:barId/private-hire" element={<BarPrivateHire.default />} loader={loaderFunc} />

        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </BrowserRouter>
    </>
  );
}
