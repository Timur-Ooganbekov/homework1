import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import SinglePage from "./pages/SinglePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/product" element={<SinglePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
