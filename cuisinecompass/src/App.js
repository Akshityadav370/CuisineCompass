import "./App.css";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";
// import '../node_modules/bootstrap-dark-5/dist/css/boo';
// // import '../node_modules/bootstrap/dist/js/bootstrap-bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createuser" element={<SignUp />} />
        <Route exact path="/myOrder" element={<MyOrder />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
