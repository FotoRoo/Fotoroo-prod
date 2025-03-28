import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import Backdrop from "./components/Backdrop";
import AboutUs from "./components/AboutUs";
import Enquire from "./components/Enquire";


const Home = lazy(() => import("./components/Home"));
const Packages = lazy(() => import("./components/Packages"));

export default function App() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen flex-col bg-bgPrimary text-textCol md:text-9xl text-5xl font-pinyon ">Page is Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetails/>}/>
          <Route path="/backdrop" element={<Backdrop />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/enquire" element={<Enquire />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
