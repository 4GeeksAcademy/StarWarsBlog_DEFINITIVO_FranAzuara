import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="containerbg">
			<h3 className="ms-3 pt-3 fw-bold">Personajes</h3>
			<div className="marco d-flex">
				{store.people['results']?.map((people, index) => {
					return (
						<div className="container">
							<div className="card" key={index} style={{ width: "18rem" }}>
								<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${people.uid}.jpg?raw=true`} className="card-img-top1" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{people.name}</h5>
									<div className="d-flex justify-content-between">
										<Link to={`/singlePeople/${people.uid}`}>
											<div className="btn btn-primary">Más Info</div>
										</Link>
										<div className="btn btn-primary" onClick={() => actions.addFavorito({
											uid: people.uid,
											name: people.name,
											type: "people"
										})}>AddToFav</div>
									</div>
								</div>
							</div>
						</div>

					)
				})
				}
			</div>

			<h3 className="ms-3 mt-3 fw-bold">Vehiculos</h3>
			<div className="marco d-flex">
				{store.vehicles['results']?.map((vehicle, index) => {
					return (
						<div className="container">
							<div className="card" key={index} style={{ width: "18rem" }}>
								<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${vehicle.uid}.jpg?raw=true`} className="card-img-top1" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{vehicle.name}</h5>
									<div className="d-flex justify-content-between">
										<Link to={`/singleVehicle/${vehicle.uid}`}>
											<div className="btn btn-primary">Más Info</div>
										</Link>
										<div className="btn btn-primary" onClick={() => actions.addFavorito({
											uid: vehicle.uid,
											name: vehicle.name,
											type: "vehicle"
										})}>AddToFav</div>
									</div>
								</div>
							</div>
						</div>

					)
				})
				}
			</div>

			<h3 className="ms-3 mt-3 fw-bold">Planetas</h3>
			<div className="marco d-flex">
				{store.planets['results']?.map((planet, index) => {
					return (
						<div className="container">
							<div className="card" key={index} style={{ width: "18rem" }}>
								<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${planet.uid}.jpg?raw=true`} className="card-img-top1" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<div className="d-flex justify-content-between">
										<Link to={`/singlePlanet/${planet.uid}`}>
											<div className="btn btn-primary">Más Info</div>
										</Link>
										<div className="btn btn-primary" onClick={() => actions.addFavorito({
											uid: planet.uid,
											name: planet.name,
											type: "planet"
										})}>AddToFav</div>
									</div>
								</div>
							</div>
						</div>

					)
				})
				}
			</div>
		</div>
	);
};
