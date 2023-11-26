import { BrowserRouter, Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Home } from "./pages/Home";
import { ShopDetail } from "./pages/ShopDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<ShopDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
