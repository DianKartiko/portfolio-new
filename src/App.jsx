import "./App.css";
import Home from "./assets/pages/HomePage";
import NavBar from "./assets/components/NavBar/NavBar";

function App() {
    return (
        <>
            <div className="bg-[var(--color-black-haze-50)] font-(font-family: --font-inter)">
                {/* Contents */}
                <NavBar />
                <Home />
                {/* Contents */}
            </div>
        </>
    );
}

export default App;
