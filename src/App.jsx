import Header from "./components/Header.jsx";
import PlanetContainer from "./components/PlanetContainer.jsx";
import './App.css';

const App = () => {

    return (
        <>
            <Header title="The Solar System"/>
            <div className="main"></div>
            <PlanetContainer/>
        </>

    )
}

export default App;