import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import ItemInfo from "./pages/itemInfo/ItemInfo";
import ShoppingCart from "./pages/cart/ShoppingCart";
import TotalItems from "./pages/totalItems/totalItems";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/iteminfo" element={<ItemInfo />} />
        <Route path="/totalItems" element={<TotalItems />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;