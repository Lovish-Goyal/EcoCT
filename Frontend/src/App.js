import { Routes, Route } from "react-router-dom";
import routes from "./routes/router";
import ScrollToTop from "./components/scroll/scrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
