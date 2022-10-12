import {Route, Routes} from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UpdateProfile from "./pages/UpdateProfile";
function App(){
  return (
    <Routes>
      <Route element={<List/>} path=""/>
      {/** 127.0.0.1:3000/detail */}
      <Route element={<Detail/>} path="detail"/>
      <Route element={<Cart/>} path="cart"/>
      <Route element={<Payment/>} path="payment"/>
      <Route element={<Success/>} path="success"/>
      <Route element={<Signin/>} path="signin"/>
      <Route element={<Signup/>} path="signup"/>
      <Route element={<UpdateProfile/>} path="update-profile"/>
    </Routes>
  )
}
export default App;
