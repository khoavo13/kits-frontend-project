import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NotFound from "./components/notFound/NotFound";
import "./style.css";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter basename="/kits-frontend-project">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/detail/:id" element={<ProductDetail />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
