import React from "react";
import PlanetCard from "./PlanetCard.jsx";
import planets from "../planetData.json";

const PlanetContainer = () => {
    return (
        <div className="w-11/12 max-w-5xl mx-auto mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {planets.map((planet) => (
                <PlanetCard
                    key={planet.id}
                    url={planet.url}
                    name={planet.name}
                    desc={planet.desc}
                    diameter={planet.diameter}
                    moons={planet.moons}
                />
            ))}
        </div>
    );
}

export default PlanetContainer;
