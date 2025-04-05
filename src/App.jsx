import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Home";


export default function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<h1>Login</h1>} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  );
}
