import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import InfoCard from "./components/InfoCard";
import ModuleList from "./components/ModuleList";
import Home from "./pages/Home/Home";
import ModulePage from "./pages/ModulePage/ModulePage";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<InfoCard />} />
          <Route path="/list" element={<ModuleList />} />
        </Route>
        <Route path="/module/:id" element={<ModulePage />} />
      </Routes>
    </div>
  );
}

export default App;
