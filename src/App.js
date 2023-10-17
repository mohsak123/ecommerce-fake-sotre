import NavbarCom from "./utility/NavbarCom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ElectronicsProducts from "./pages/ElectronicsProducts";
import JeweleryProducts from "./pages/JeweleryProducts";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="font">
      <BrowserRouter>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route
            path="/products/category1/:cat"
            element={<ElectronicsProducts />}
          />
          <Route
            path="/products/category2/:cat"
            element={<JeweleryProducts />}
          />
          <Route path="/products/category3/:cat" element={<MenClothing />} />
          <Route path="/products/category4/:cat" element={<WomenClothing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
