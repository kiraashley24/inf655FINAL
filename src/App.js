import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import ItemInfo from "./pages/itemInfo/ItemInfo";
import ShoppingCart from "./pages/cart/ShoppingCart";
import TotalItems from "./pages/totalItems/totalItems";
import Dessert from "./pages/dessert/Dessert"; 
import Fruit from "./pages/fruit/Fruit";
import Vegetable from "./pages/vegetables/Vegetable";
import Meat from "./pages/meat/Meat";
import Bread from "./pages/bread/Bread";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/iteminfo" element={<ItemInfo />} />
        <Route path="/totalItems" element={<TotalItems />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/dessert" element={<Dessert />} /> 
        <Route path="/fruit" element={<Fruit />} /> 
        <Route path="/vegetable" element={<Vegetable />} /> 
        <Route path="/meat" element={<Meat />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
