import PropTypes from 'prop-types';

const PlanetCard = ({url, name, desc, diameter, moons}) => {
    return (
        <div className="card bg-base-100 bg-opacity-50 shadow-xl">
            <figure className="bg-black">
                <img
                    src={url}
                    alt={name}
                    className="w-52"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>{desc}</p>
                <div className="px-4 py-2 bg-base-200 rounded-box">
                    <h3 className="text-xl font-bold">Planet Profile</h3>
                    <ul>
                        <li><strong className="text-gray-500">Diameter:</strong> {diameter}</li>
                        <li><strong className="text-gray-500">Moons:</strong> {moons}</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

PlanetCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    moons: PropTypes.number.isRequired,
};


export default PlanetCard;