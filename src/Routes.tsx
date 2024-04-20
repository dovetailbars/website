
import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

import Home from './pages/Home';
import CocktailMenu from './pages/CocktailMenu';
import PrivateHire from './pages/PrivateHire';
import Bookings from './pages/Bookings';
import BookingConfirmation from './pages/BookingConfirmation';
import CocktailMakingClass from './pages/CocktailMakingClass';
import BarHome from "./pages/bars/Home";
import BarBookings from "./pages/bars/Bookings";
import BarPrivateHire from "./pages/bars/PrivateHire";

import ScrollToTop from "./components/ScrollToTop";


const loaderFunc = async ({ request, params }) => {
  return { barId: params.barId };
};

export default function Routes() {

  return (<>
    <BrowserRouter>
      <ScrollToTop />
      <ReactRoutes>
        <Route path="/" element={<Home />} />

        <Route path="/cocktail-menu" element={<CocktailMenu />} />
        <Route path="/private-hire" element={<PrivateHire />} />
        <Route path="/cocktail-making-class" element={<CocktailMakingClass />} />
        <Route path="/masterclasses" element={<Navigate replace to="/cocktail-making-class" />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/confirmation" element={<BookingConfirmation />} />

        <Route path="/:barId" element={<BarHome />} loader={loaderFunc} />
        <Route path="/:barId/bookings" element={<BarBookings />} loader={loaderFunc} />
        <Route path="/:barId/private-hire" element={<BarPrivateHire />} loader={loaderFunc} />

        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </BrowserRouter>
    </>
  );
}
