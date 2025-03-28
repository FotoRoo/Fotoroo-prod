
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BookNow from "./BookNow";
import ScrollToTop from "./ScrollToTop";

const Layout = () => (
  <div className="bg-bgPrimary">
    <ScrollToTop />
    <div className="px-3 md:px-7 font-poppins w-full">
      <Header />
      <main className="z-0">
        <Outlet />
      </main>
    </div>
    <BookNow />
    <Footer />
  </div>
);

export default Layout;
