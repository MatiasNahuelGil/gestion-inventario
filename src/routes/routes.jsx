
import CreateProduct from "../pages/CreateProduct";
import Header from "../components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowProducts from "../pages/ShowProducts";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </Router>
    </>
  );
}
