import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/HomePage";
import NavBar from "./assets/components/NavBar/NavBar";
import PageNotFound from "./assets/pages/404NotFound";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* Contents */}

                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
                {/* Contents */}
            </Routes>
        </Router>
    );
}

export default App;
