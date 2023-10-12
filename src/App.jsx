import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Something goes wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage></Homepage>}></Route>
        <Route path="product" element={<Product></Product>}></Route>
        <Route path="pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="app" element={<AppLayout></AppLayout>}>
          <Route
            index
            element={
              <CityList cities={cities} isLoading={isLoading}></CityList>
            }
          ></Route>
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading}></CityList>
            }
          ></Route>
          <Route path="cities/:id" element={<City></City>}></Route>
          <Route
            path="countries"
            element={
              <CountryList cities={cities} isLoading={isLoading}></CountryList>
            }
          ></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
