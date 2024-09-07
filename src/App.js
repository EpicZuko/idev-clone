import Frontend from "./components/Frontend";
import Java from "./components/Java";
import UXUI from "./components/UIUX";
import Python from "./components/Python";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/java" element={<Java />} />
        <Route path="/ux-ui" element={<UXUI />} />
        <Route path="/python" element={<Python />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
